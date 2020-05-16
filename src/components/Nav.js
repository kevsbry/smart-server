import React, { useState, useRef, useEffect } from "react";
import style from "./style.module.css";

const MenuIcon = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={style.menuIcon}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

function Nav(props) {
  const [locations, setLocations] = useState([
    {
      name: "home",
      location: "/home",
    },
    {
      name: "features",
      location: "/features",
    },
    {
      name: "platforms",
      location: "/platform",
    },
    {
      name: "screenshots",
      location: "/screenshot",
    },
    {
      name: "download",
      location: "/download",
    },
  ]);

  const [linkColor, setLinkColor] = useState("#fff");

  const { home, features, platform, screenshot, download } = props.position;

  const smoothScroll = (scrollTo) => {
    var startY = window.pageYOffset; //current scroll position
    var stopY = scrollTo; // scroll to
    var distance = stopY > startY ? stopY - startY : startY - stopY;

    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  };

  const onClickNav = (location) => {
    if (location === "/home") smoothScroll(home);
    else if (location === "/features") smoothScroll(features);
    else if (location === "/platform") smoothScroll(platform);
    else if (location === "/screenshot") smoothScroll(screenshot);
    else if (location === "/download") smoothScroll(download);
  };

  const location = useRef();
  const burger = useRef();

  useEffect(() => {
    //size
    if (window.innerWidth <= 900) {
      location.current.style.display = "none";
      burger.current.style.display = "block";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 900) {
        location.current.style.display = "none";
        burger.current.style.display = "block";
      } else {
        location.current.style.display = "block";
        burger.current.style.display = "none";
      }
    });
  }, []);

  const onScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > features) setLinkColor("#707070");
      else setLinkColor("#fff");
    });
  };

  useEffect(() => {
    props.position.features && onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll());
    };
  });

  return (
    <div className={style.Nav}>
      <span className={style.logo}>smart server</span>
      <div ref={location} className={style.locations}>
        {locations.map((loc) => (
          <span
            key={loc.location}
            style={{ color: linkColor }}
            onClick={() => {
              onClickNav(loc.location);
            }}
          >
            {loc.name}
          </span>
        ))}
      </div>
      <MenuIcon ref={burger} />
    </div>
  );
}

export default Nav;
