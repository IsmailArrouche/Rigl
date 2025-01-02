import React, { useState } from 'react';

const PopupCommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [reply, setReply] = useState('');
  const [likedComments, setLikedComments] = useState([]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { text: newComment, id: Date.now(), likes: 0, replies: [] }]);
      setNewComment('');
    }
  };

  const handleAddReply = (commentId) => {
    if (reply.trim()) {
      const updatedComments = comments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, { text: reply, id: Date.now() }] }
          : comment
      );
      setComments(updatedComments);
      setReply('');
    }
  };

  const handleLikeComment = (commentId) => {
    if (!likedComments.includes(commentId)) {
      setLikedComments([...likedComments, commentId]);
      const updatedComments = comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      );
      setComments(updatedComments);
    }
  };

  return (
    <div className="popup">
      <div className="popup-header">
        <h3>Publier un Commentaire</h3>
      </div>
      <div className="popup-body">
        <textarea
          placeholder="Écrivez un commentaire..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Publier</button>

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <div className="comment-content">
                <p>{comment.text}</p>
                <button onClick={() => handleLikeComment(comment.id)}>
                  {likedComments.includes(comment.id) ? 'Détesté' : 'Aimer'} ({comment.likes})
                </button>
              </div>

              <div className="replies">
                <textarea
                  placeholder="Répondre à ce commentaire..."
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <button onClick={() => handleAddReply(comment.id)}>Répondre</button>

                <div className="replies-list">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="reply">
                      <p>{reply.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupCommentSection;
