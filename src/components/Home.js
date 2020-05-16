import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const Home = React.forwardRef((props, ref) => {
  const [title, setTitle] = useState(
    <span className={style["home-title"]}>
      Transform your phone <br /> into a Server and start sharing content
    </span>
  );

  const [paragraph, setParagraph] = useState(
    <p>
      Quickly share your files with others by transforming your mobile phone
      into a server.
      <br />
      Once you start your mobile server other devices will be able to connect to
      you and access
      <br />
      the files you chose to share.
    </p>
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setTitle(
          <span className={style["home-title"]}>
            Transform your phone into a Server and start sharing content
          </span>
        );
        setParagraph(
          <p>
            Quickly share your files with others by transforming your mobile
            phone into a server. Once you start your mobile server other devices
            will be able to connect to you and access the files you chose to
            share.
          </p>
        );
      }
    });
  }, []);

  return (
    <div ref={ref} className={style.Home}>
      <div className={style["home-text"]}>
        {title}
        {paragraph}
      </div>
      <div className={style["home-image"]}>
        <img src={require("../assets/main_logo.svg")} alt="home-image" />
      </div>
    </div>
  );
});

export default Home;
