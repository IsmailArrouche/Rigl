import React, { useState, useRef, useEffect } from "react";
import avatar from "../../assets/avatar.jpeg";
import { PhotographIcon, CameraIcon } from "@heroicons/react/solid";
import { FaHeart, FaCommentAlt,FaShare } from 'react-icons/fa';

const CreatePost = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [showCamera, setShowCamera] = useState(false); // Show Camera Popup
  const [cameraMode, setCameraMode] = useState(null); // Mode: "video" or "photo"
  const videoRef = useRef(null); // Reference to video element
  const mediaRecorderRef = useRef(null);
  const canvasRef = useRef(null); // Reference to canvas element
  const [stream, setStream] = useState(null); // To store media stream
  const [likes, setLikes] = useState({});

    const handleLike = (postId) => {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: !prevLikes[postId],
      }));
    };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleTextChange = (event) => {
    setPostText(event.target.value); // Met à jour le texte du post avec la valeur du champ
  };  

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file type (image or video)
      if (file.type.startsWith("image")) {
        setSelectedMedia(file);
        setMediaType("image");
      } else if (file.type.startsWith("video")) {
        setSelectedMedia(file);
        setMediaType("video");
      } else {
        alert("Please select a valid image or video.");
      }
    }
  };

  const handlePublishPost = () => {
    // Vérifier si le texte est vide et s'il n'y a pas de média sélectionné
    if (postText.trim() === "" && !selectedMedia) {
      alert("Please write something or upload a file before posting.");
      return; // Si le texte est vide et aucun média n'est sélectionné, arrêter l'exécution
    }
  
    // Ajouter le nouveau post aux posts existants
    setPosts([
      {
        text: postText.trim(), // Utilisation du texte nettoyé
        id: Date.now(),
        media: selectedMedia, // Le média est nul si aucun média n'est sélectionné
        mediaType: mediaType,
      },
      ...posts,
    ]);
  
    // Réinitialiser l'état des champs après la publication
    setPostText(""); // Réinitialiser le texte
    setSelectedMedia(null); // Réinitialiser le média sélectionné
    setMediaType(null); // Réinitialiser le type de média
  
    // Optionnel : Vous pouvez également réinitialiser d'autres états liés à la caméra si nécessaire
    setShowCamera(false); // Fermer la caméra si elle est ouverte
  };

const startCamera = (mode) => {
  setCameraMode(mode);
  setShowCamera(true);
  navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
          setStream(stream);
          if (videoRef.current) {
              videoRef.current.srcObject = stream;
          }
      })
      .catch((error) => {
          console.error("Error accessing the camera", error);
      });
};

  const stopCamera = () => {
    if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop(); // Arrêter l'enregistrement
    }
    if (stream) {
        stream.getTracks().forEach(track => track.stop()); // Arrêter tous les flux vidéo et audio
    }
    setShowCamera(false);
};
  
  const handleCameraPublish = () => {
    if (cameraMode === "video") {
      const video = videoRef.current;
      const stream = video.srcObject;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/mp4" });
      const chunks = [];
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
          const videoBlob = new Blob(chunks, { type: "video/*" });
          const videoFile = new File([videoBlob], "video.*", { type: "video/*" });
          setSelectedMedia(videoFile);
          setMediaType("video");
      };
      mediaRecorder.start();
  }  else if (cameraMode === "photo") {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      if (canvas && video) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
          setSelectedMedia(file); // Set the captured image as selected media
          setMediaType("image");
        });
      }
    }
    stopCamera();
  };

  const handleCameraCancel = () => {
    stopCamera();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dots-button") &&
        !event.target.closest(".dropdown-menu")
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString('fr-FR', options);
  };

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg shadow-sm p-4 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className="flex items-center">
            <i className="feather-edit-3 text-sm sm:text-base lg:text-lg mr-2" />
            <span className="text-sm sm:text-base lg:text-lg font-medium">Create Post</span>
          </div>
          <button
            className="dots-button w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-gray-900 p-2 rounded-full bg-gray-300 dark:bg-white dark:text-gray-800 flex items-center justify-center"
            onClick={toggleMenu}
          >
            ···
          </button>
        </div>

        {/* Post Input */}
        <div className="mt-4 relative">
          <div className="absolute left-3 top-2">
            <img
              src={avatar}
              alt="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full"
            />
          </div>
          <textarea
            value={postText}
            onChange={handleTextChange}
            className="w-full pl-14 sm:pl-16 lg:pl-20 pr-4 py-2 min-h-[80px] lg:min-h-[120px] border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1B2136] dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
            placeholder="What's on your mind?"
          />
        </div>

        {/* Actions */}
        <div className="mt-4 lg:mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 lg:gap-4">
            <label className="flex items-center space-x-2 p-2 lg:p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <PhotographIcon className="h-5 w-5 lg:h-6 lg:w-6 text-green-500" />
              <span className="text-sm lg:text-base">Photo/Video</span>
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaChange}
              />
            </label>
            <button
              className="flex items-center space-x-2 p-2 lg:p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => startCamera("photo")}
            >
              <CameraIcon className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500" />
              <span className="text-sm lg:text-base">Camera</span>
            </button>
          </div>
          <button
            onClick={handlePublishPost}
            className="px-4 py-2 lg:px-6 lg:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm lg:text-base font-medium"
          >
            Publish
          </button>
        </div>
      </div>

      {/* Posts Display */}
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-[#293145] rounded-lg shadow-sm p-4"
          >
            {/* ... existing post content ... */}
          </div>
        ))}
      </div>

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-[#293145] rounded-lg max-w-lg w-full p-4">
            {/* ... existing camera content ... */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
