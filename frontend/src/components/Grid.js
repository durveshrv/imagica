import React, { useState } from "react";

const Grid = ({ photos, onDelete }) => {
  const [draggedPhotoId, setDraggedPhotoId] = useState(null);

  const handleDragStart = (e, id) => {
    setDraggedPhotoId(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, id) => {
    e.preventDefault();
    // Prevent dropping onto the same photo
    if (draggedPhotoId !== id) {
      // Perform your logic here, for example, reorder photos
      console.log("Photo dropped with ID:", draggedPhotoId);
      console.log("Dropped onto photo with ID:", id);
    }
    setDraggedPhotoId(null);
  };

  const handleDelete = (id) => {
    // Call the onDelete function with the id of the photo to be deleted
    onDelete(id);
  };

  return (
    <>
      <h1>Our Gallery</h1>
      <div className="grid" onDragOver={handleDragOver}>
        {photos.map(({ photo, _id }) => (
          <div
            key={_id}
            className="grid__item"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, _id)}
            onDrop={(e) => handleDrop(e, _id)}
          >
            <button
              className="delete-button"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
            <img
              src={`http://localhost:5000/uploads/${photo}`}
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
