import React from "react";
import "../Card/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ index, author, title, image, description }) => {
  let navigate = useNavigate();
  return (
    <div className="Card">
      <img
        src={image}
        alt="image"
        id="cardimage"
        onClick={() => navigate(`/${index}`)}
      />
      <div id="title" onClick={() => navigate(`/${index}`)}>
        {title}
      </div>
      <div id="description" onClick={() => navigate(`/${index}`)}>
        {description}
      </div>
      <div id="Card-like">
        <div id="author" onClick={() => navigate(`/${index}`)}>
          {author != null ? author : ""}
        </div>
      </div>
    </div>
  );
};

export default Card;
