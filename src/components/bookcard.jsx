import React from "react";
import "./bookcard.css";

const bookCard = ({ image, name, author, genre }) => {
  return (
    <div className="book-card">
      <img src={image} alt="book cover" />
      <h2>{name}</h2>
      <p>{author}</p>
      <p>{genre}</p>
    </div>
  );
};

export default bookCard;
