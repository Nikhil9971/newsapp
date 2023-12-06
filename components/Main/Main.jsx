import React from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Main.css";
import { useRecoilState } from "recoil";
import newsState from "../../Store/news";
import { useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase";

const Main = () => {
  let [arr, setArr] = useRecoilState(newsState);

  console.log(auth.currentUser);
  let url1 =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1ecf9d2283d24d9da0f4ffcd0d20b272";

  let url2 =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=1ecf9d2283d24d9da0f4ffcd0d20b272";

  let url3 =
    "https://newsapi.org/v2/everything?q=Apple&from=2023-12-05&sortBy=popularity&apiKey=1ecf9d2283d24d9da0f4ffcd0d20b272";

  function fetchData() {
    axios
      .get(url2)
      .then((res) => {
        localStorage.setItem("news", JSON.stringify(res.data));
      })
      .then(() => {
        setArr(JSON.parse(localStorage.getItem("news")).articles);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="Main">
        {arr.map((val, index) => {
          return (
            <Card
              key={index}
              index={index}
              title={val.title}
              description={val.description}
              image={val.urlToImage}
              author={val.author}
            />
          );
        })}
      </div>
    </>
  );
};

export default Main;
