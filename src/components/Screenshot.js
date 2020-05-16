import React, { useState } from "react";
import style from "./style.module.css";

const Screenshot = React.forwardRef((props, ref) => {
  const [images, setImages] = useState([0, 1, 2, 3]);

  return (
    <div ref={ref} className={style["Screenshot"]}>
      <span className={style.title}>screenshots</span>
      <div className={style["screenshot-slide"]}>
        {images.map(img => (
          <span>{img}</span>
        ))}
      </div>
    </div>
  );
});

export default Screenshot;
