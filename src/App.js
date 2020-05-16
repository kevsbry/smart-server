import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Platform from "./components/Platform";
import Screenshot from "./components/Screenshot";
import Download from "./components/Download";

function App() {
  const home = useRef();
  const features = useRef();
  const platform = useRef();
  const screentshot = useRef();
  const download = useRef();

  const [position, setPosition] = useState({});

  useEffect(() => {
    setPosition({
      home: 0,
      features: features.current.offsetTop,
      platform: platform.current.offsetTop,
      screenshot: screentshot.current.offsetTop + 300,
      download: download.current.offsetTop
    });
  }, []);

  return (
    <div className="App">
      <Route
        path="/"
        render={() => (
          <>
            <Nav position={position} />
            <Home ref={home} />
            <Features ref={features} />

            <Platform ref={platform} />
            <Screenshot ref={screentshot} />
            <Download ref={download} />
          </>
        )}
      ></Route>
    </div>
  );
}

export default App;
