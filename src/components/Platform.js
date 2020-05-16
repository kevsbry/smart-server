import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const Platform = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) setIsMobile(true);

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) setIsMobile(true);
      else setIsMobile(false);
    });
  }, []);

  return (
    <div className={style.Platform}>
      <div ref={ref} className={style["platform-container"]}>
        <span>cross platform</span>
        <div>
          <img
            src={
              !isMobile
                ? require("../assets/platform.svg")
                : require("../assets/platform_mobile.svg")
            }
            alt="platform image"
          />
        </div>
      </div>
    </div>
  );
});

export default Platform;
