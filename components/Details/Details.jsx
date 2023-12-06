import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import newsState from "../../Store/news";
import Header from "../Header/Header";
import "./Details.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { auth } from "../../firebase";
const Details = () => {
  let [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("news")).articles
  );

  let { index } = useParams();

  let totaltime = arr[index].publishedAt.split("T");
  let time = totaltime[0];

  return (
    <>
      <Header />
      <div id="details">
        <div id="details_fullheader">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <h1 id="details_header">{arr[index].title}</h1>
        </div>
        <img src={arr[index].urlToImage} alt="Image" id="details_image" />
        <div id="details_author">
          <h2 id="details_author_author">{arr[index].author}</h2>
          <div id="details_author_time">{time}</div>
        </div>

        <hr />
        <div id="details_description">{arr[index].description}</div>
        <div id="details_link">
          Full Article:
          <Link to={arr[index].url} target="_blank">
            {arr[index].url}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
