import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Download = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={style.Download}>
      <span className={style.title}>download now!</span>
      <div className={style["link-container"]}>
        <Link
          className={style.link}
          to="google.com"
          style={{ textDecoration: "none" }}
        >
          <img
            src={require("../assets/play_store.svg")}
            alt="google play icon"
          />
          <span>android</span>
        </Link>
        <Link
          className={style.link}
          to="google.com"
          style={{ textDecoration: "none" }}
        >
          <img src={require("../assets/app_store.svg")} alt="app store icon" />
          <span>ios</span>
        </Link>
      </div>
    </div>
  );
});

export default Download;
