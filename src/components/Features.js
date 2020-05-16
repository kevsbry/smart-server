import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import laptopImage from "../assets/laptop.svg";
import noWifiImage from "../assets/no_wifi.svg";
import cloudStorageImage from "../assets/cloud_storage.svg";
import multiBrowser from "../assets/multi_browser.svg";

const Feature = props => {
  return (
    <div className={style["feature-container"]}>
      {props.isRightAlign === false && (
        <img src={props.image} alt="feature image" />
      )}
      <div
        className={
          props.isRightAlign
            ? style["feature-right-align"]
            : style["feature-left-align"]
        }
      >
        {props.title}
        {props.paragraph}
      </div>
      {props.isRightAlign && <img src={props.image} alt="feature image" />}
    </div>
  );
};

const Features = React.forwardRef((props, ref) => {
  const [features, setFeatures] = useState([
    {
      title: (
        <span>
          access your files <br /> on any device
        </span>
      ),
      paragraph: (
        <p>
          SMART SERVER allows you to access documents,
          <br />
          photos, videos and many more that are stored on your
          <br />
          phone on the fly. Gone are the days of USB thumb drives
          <br />
          and USB cables, just connect your device to your phone
          <br />
          server and download them right away at a high speed.
        </p>
      ),
      image: laptopImage
    },
    {
      title: (
        <span>
          no internet
          <br />
          connection needed
        </span>
      ),
      paragraph: (
        <p>
          Internet connection and mobile data is not needed for
          <br />
          SMART SERVER to work while it hosts your local data.
          <br />
          Only wifi hotspot is required to be turned on to allow
          <br />
          other devices to connect on your mobile server.
        </p>
      ),
      image: noWifiImage
    },
    {
      title: (
        <span>
          your own cloud storage
          <br />
          at your finger tips
        </span>
      ),
      paragraph: (
        <p>
          Browse files and watch uncompressed lossless photos
          <br />
          and videos without having to download them. With
          <br />
          SMART SERVER you will be able to stream stored media
          <br />
          on your smartphone to any device at HIGH-SPEED.
        </p>
      ),
      image: cloudStorageImage
    },
    {
      title: <span>multi browser support</span>,
      paragraph: (
        <p>
          SMART SERVER is accessible to multiple internet
          <br />
          browsers and on any type of device weather it's a
          <br />
          laptop, desktop or mobile. You will be able to access
          <br />
          your data on your phone via local cloud storage on
          <br />
          multiple internet browsers.
        </p>
      ),
      image: multiBrowser
    }
  ]);

  useEffect(() => {
    if (window.innerWidth <= 400) {
      setFeatures([
        {
          title: (
            <span>
              access your files <br /> on any device
            </span>
          ),
          paragraph: (
            <p>
              SMART SERVER allows you to access documents, photos, videos and
              many more that are stored on your phone on the fly. Gone are the
              days of USB thumb drives and USB cables, just connect your device
              to your phone server and download them right away at a high speed.
            </p>
          ),
          image: laptopImage
        },
        {
          title: (
            <span>
              no internet
              <br />
              connection needed
            </span>
          ),
          paragraph: (
            <p>
              Internet connection and mobile data is not needed for SMART SERVER
              to work while it hosts your local data. Only wifi hotspot is
              required to be turned on to allow other devices to connect on your
              mobile server.
            </p>
          ),
          image: noWifiImage
        },
        {
          title: (
            <span>
              your own cloud storage
              <br />
              at your finger tips
            </span>
          ),
          paragraph: (
            <p>
              Browse files and watch uncompressed lossless photos and videos
              without having to download them. With SMART SERVER you will be
              able to stream stored media on your smartphone to any device at
              HIGH-SPEED.
            </p>
          ),
          image: cloudStorageImage
        },
        {
          title: <span>multi browser support</span>,
          paragraph: (
            <p>
              SMART SERVER is accessible to multiple internet browsers and on
              any type of device weather it's a laptop, desktop or mobile. You
              will be able to access your data on your phone via local cloud
              storage on multiple internet browsers.
            </p>
          ),
          image: multiBrowser
        }
      ]);
    }
  }, []);

  return (
    <div ref={ref} className={style.Features}>
      <span className={style["features-resp-title"]}>key features</span>
      <div className={style["first-col"]}>
        {features.map(
          (f, i) =>
            i < 2 && (
              <Feature
                key={i}
                title={f.title}
                paragraph={f.paragraph}
                image={f.image}
                isRightAlign={true}
              />
            )
        )}
      </div>
      <div className={style["second-col"]}>
        <span className={style["features-title"]}>key features</span>
        <img src={require("../assets/iphone_db.svg")} alt="iphone" />
      </div>
      <div className={style["third-col"]}>
        {features.map(
          (f, i) =>
            i > 1 &&
            i < 4 && (
              <Feature
                key={i}
                title={f.title}
                paragraph={f.paragraph}
                image={f.image}
                isRightAlign={false}
              />
            )
        )}
      </div>
    </div>
  );
});

export default Features;
