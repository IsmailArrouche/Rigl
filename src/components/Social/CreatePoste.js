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
<div className="max-w-full px-2">
  <div   className="card sm:w-1/2 lg:w-[630px] lg:ml-[5.5rem] shadow-sm rounded-xl border-0 p-3 sm:p-4 mx-auto bg-white dark:bg-[#293145] dark:text-[#FFFFFF]">
    {/* Card Header */}
    <div className="card-body p-0 relative">
      <div className="flex items-center justify-between">
        {/* Section gauche : "Create Post" */}
        <div className="flex items-center text-primary bg-light">
          <i className="feather-edit-3 text-sm sm:text-base mr-2" />
          <span className="text-sm sm:text-base">Create Post</span>
        </div>
        {/* Bouton menu déroulant */}
        <button
          className="pt-[6px] dots-button w-9 h-9 text-gray-900 p-2 sm:p-3 rounded-full  bg-gray-300 dark:bg-[#ffffff] dark:text-[#363232]"
          style={{ paddingTop: "6px"}}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          ···
    </button>

    {/* Menu déroulant */}
    {menuOpen && (
      <ul className="dropdown-menu absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-40 sm:w-56 z-50">
        <li className="dropdown-item p-2 sm:p-3 flex items-start hover:bg-gray-100 cursor-pointer">
          <i className="feather-bookmark mr-2 text-gray-500" />
          <div>
            <strong className="block text-xs sm:text-sm font-medium">Save Link</strong>
            <span className="block text-xs sm:text-sm text-gray-500">
              Add this to your saved items
            </span>
          </div>
        </li>
        <li className="dropdown-item p-2 sm:p-3 flex items-start hover:bg-gray-100 cursor-pointer">
          <i className="feather-alert-circle mr-2 text-gray-500" />
          <div>
            <strong className="block text-xs sm:text-sm font-medium">Hide Post</strong>
            <span className="block text-xs sm:text-sm text-gray-500">
              Save to your saved items
            </span>
          </div>
        </li>
      </ul>
    )}
  </div>
</div>


    {/* Post Input */}
    <div className="card-body p-0 mt-3 relative">
      <div className="avatar absolute left-2 top-1">
        <img
          src={avatar}
          alt="icon"
          className="shadow-sm rounded-full w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>
        <textarea
          id="postText"
          value={postText}
          name="message"
          className="textarea w-full p-3 pl-14 border border-gray-300 dark:border-[#555] bg-white dark:bg-[#1B2136] dark:text-[#FFFFFF] rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What's on your mind?"
          onChange={handleTextChange}
        />
    </div>

    <div className="justify-between flex flex-wrap">
      {/* Buttons */}
      <div className="card-body flex flex-wrap p-0 mt-3 gap-2 sm:gap-4">
        
        <label className="flex items-center text-green-500 space-x-2 p-2 sm:p-3 rounded-md hover:bg-gray-200 cursor-pointer transition w-full sm:w-auto">
          <PhotographIcon className="h-5 sm:h-6 w-5 sm:w-6" />
          <span className="text-xs sm:text-sm">Photo/Video</span>
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={(e) => handleMediaChange(e)}
          />
        </label>
        <button
          className="flex items-center text-yellow-500 space-x-2 p-2 sm:p-3 rounded-md hover:bg-gray-200 transition w-full sm:w-auto"
          onClick={() => startCamera("photo")}
        >
          <CameraIcon className="h-5 sm:h-6 w-5 sm:w-6" />
          <span className="text-xs sm:text-sm">Feeling/Activity</span>
        </button>
      </div>
      {/* Publish Button */}
      <div className="card-body p-3 mt-4">
        <button
          onClick={handlePublishPost}
          className="w-100 p-3 bg-blue-500 text-white text-sm sm:text-base rounded-md hover:bg-blue-600 transition"
        >
          Publish
        </button>
      </div>
    </div>
  </div>

  {/* Camera Pop-up */}
  {showCamera && (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1B2136] dark:text-[#FFFFFF] p-4 sm:p-6 rounded-md w-full max-w-xs sm:max-w-lg">
        <video ref={videoRef} autoPlay playsInline className="w-full h-auto rounded-md"></video>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2 sm:gap-4">
          <button
            onClick={handleCameraPublish}
            className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 text-xs sm:text-sm"
          >
            {cameraMode === "photo" ? "Capture Photo" : "Capture Video"}
          </button>
          <button
            onClick={handleCameraCancel}
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 text-xs sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}

  {/* Posts */}
  <div className="sm:w-1/2 lg:w-[630px] lg:max-h-[610px] mt-6 flex flex-wrap gap-4 justify-center ">
  {posts.map((post) => (
    <div
      key={post.id}
      className="card w-full sm:w-full lg:w-full shadow-sm rounded-xl border-0 p-3 sm:p-4 mb-3 mx-auto bg-white dark:bg-[#293145] dark:text-[#FFFFFF]"
    >
      {/* En-tête */}
      <div className="flex flex-wrap justify-between">
        <div className="card-body p-0 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-primary bg-light">
              <i className="feather-edit-3 text-sm sm:text-base mr-2" />
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="icon"
                className="shadow-sm rounded-full w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="flex flex-col">
                <span className="pl-2 text-sm sm:text-base">Mohannad Zitoun</span>
                <span className="px-2 flex-col text-xs text-gray-400">
                  {formatDate(post.id)} {/* Utilisez le timestamp du post pour afficher la date */}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="items-center dots-button w-9 h-9 text-gray-900 p-2 sm:p-3 rounded-full bg-gray-300 dark:bg-[#ffffff] dark:text-[#363232]"
          style={{ paddingTop: "6px" }}
        >
          ···
        </button>
</div>

      {/* Contenu média */}
      {post.text && <p className="text-xs sm:text-sm">{post.text}</p>}
      {post.media && (
        <div className="card-body p-4">
          {post.mediaType === "image" ? (
            <div>
              <p className="text-xs sm:text-sm">{post.text}</p>
              <img
                src={URL.createObjectURL(post.media)}
                alt="Post media"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          ) : (
            <video controls className="w-full h-auto rounded-md">
              <source
                src={URL.createObjectURL(post.media)}
                type={post.media.type}
              />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          )}
        </div>
      )}

      {/* Actions */}
                <div className="card-body flex flex-wrap p-0 mt-2 gap-2 sm:gap-4">
                  {/* Bouton "Like" */}
                  <button
                    className={`flex items-center ${
                      likes[post.id] ? 'text-[#E53E3E]' : 'text-[#6B7280] dark:text-[#A0AEC0]'
                    } hover:text-[#C53030] dark:hover:text-[#E53E3E] transition-colors duration-300`}
                    onClick={() => handleLike(post.id)}
                    aria-label="Like"
                  >
                    <FaHeart
                      className={`mr-1 h-5 w-5 transition-transform duration-300 ${
                        likes[post.id] ? 'scale-125' : 'scale-100'
                      }`}
                    />
                    <span>{likes[post.id] ? 1 : 0}</span>
                  </button>
      
                      <div className="flex flex-wrap justify-between w-[530px]">
                      {/* Bouton "Commenter" */}
                      <button className="flex items-center text-[#6B7280] dark:text-[#A0AEC0] space-x-2 p-2 sm:p-3 rounded-md  w-full sm:w-auto">
                          <FaCommentAlt className="h-5 w-5" />
                          <span className="text-xs sm:text-sm">Comment</span>
                      </button>
                      
                      {/* Bouton "Partager" */}
                      <button className="flex items-center text-[#6B7280] dark:text-[#A0AEC0] space-x-2 p-2 sm:p-2 rounded-md w-full sm:w-auto">
                          <FaShare className="h-5 w-5" />
                          <span className="text-xs sm:text-sm">Share</span>
                      </button>
                      </div>
                </div>
    </div>
  ))}
  </div>

</div>
  );
};

export default CreatePost;
