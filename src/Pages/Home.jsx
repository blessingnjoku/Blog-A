import React, { useEffect, useState } from "react";
import "../App.css";
import Cards from "../Components/Cards";
import Navbar from "../Components/Navbar";

const Home = (props) => {
  const [news, setNew] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getnew = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=884f84b9e69f448298ac14cf067314ee"
    );
    const news = await res.json();
    setNew([news]);
    console.log([news]);
  };

  useEffect(() => {
    getnew();
  }, [setNew]);

  // if (news === []) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      {news.map((val, key) => {
        // const { author, content, description, publishedAt, title, id } = val;
        return (
          <div
            key={key}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              backgroundColor: "#F9F9FE",
              paddingTop: "50px",
            }}
          >
            {val.articles.map((item) => {
              return (
                <Cards
                  style={{ marginTop: "50px" }}
                  heading={item.title}
                  images={item.urlToImage}
                  content={item.content}
                  readurl={item.url}
                  // desc={item.description}
                  author={item.author}
                  date={item.publishedAt}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
