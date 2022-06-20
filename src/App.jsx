import { useState } from "react";

const App = () => {
  const [focus, setFocus] = useState("initial");
  const [zoom, setZoom] = useState("initial");
  const [pan, setPan] = useState("initial");

  const handleFocusIn = (e) => {
    e.preventDefault();
    if (focus === "initial" || focus === "out") {
      setFocus("in");
    } else {
      alert("mentok");
    }
  };

  const handleFocusOut = (e) => {
    e.preventDefault();
    if (focus === "initial" || focus === "in") {
      setFocus("out");
    } else {
      alert("mentok");
    }
  };
  const handleZoomIn = (e) => {
    e.preventDefault();
    if (zoom === "initial" || zoom === "out") {
      setZoom("in");
    } else {
      alert("mentok");
    }
  };

  const handleZoomOut = (e) => {
    e.preventDefault();
    if (zoom === "initial" || zoom === "in") {
      setZoom("out");
    } else {
      alert("mentok");
    }
  };

  const handlePanUp = (e) => {
    e.preventDefault();
    if (pan !== "up") {
      setPan("up");
    } else {
      alert("mentok");
    }
  };

  const handlePanRight = (e) => {
    e.preventDefault();
    if (pan !== "right") {
      setPan("right");
    } else {
      alert("mentok");
    }
  };

  const handlePanBot = (e) => {
    e.preventDefault();
    if (pan !== "bot") {
      setPan("bot");
    } else {
      alert("mentok");
    }
  };

  const handlePanLeft = (e) => {
    e.preventDefault();
    if (pan !== "left") {
      setPan("left");
    } else {
      alert("mentok");
    }
  };

  return (
    <div className="w-full lg:h-screen items-center justify-center bg-zinc-900 space-y-5 p-5 lg:flex lg:space-y-0 lg:space-x-5">
      <div className="w-full lg:w-6/12 bg-gray-800 py-20 text-white space-y-5 rounded-lg h-96">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-20 transform flex items-center">
            {focus === "out" || focus === "initial" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75"
                viewBox="0 0 24 24"
                onClick={handleFocusIn}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75 border-r-8 border-cyan-600"
                viewBox="0 0 24 24"
                onClick={handleFocusIn}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            )}
          </div>
          <div className="w-2/4 lg:w-1/4">
            <div className="text-xl font-medium dark:text-white text-center mb-1">
              FOCUS
            </div>
          </div>
          <div className="w-20 transform rotate-180">
            {focus === "in" || focus === "initial" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75"
                viewBox="0 0 24 24"
                onClick={handleFocusOut}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75 border-r-8 border-cyan-600"
                viewBox="0 0 24 24"
                onClick={handleFocusOut}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            )}
          </div>
        </div>
        <div className="flex justify-around items-center space-x-10">
          <div className="text-2xl font-medium dark:text-white text-center mb-1">
            IN
          </div>
          <div className="text-2xl font-medium dark:text-white text-center mb-1">
            OUT
          </div>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-20 transform">
            {zoom === "out" || zoom === "initial" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75"
                viewBox="0 0 24 24"
                onClick={handleZoomIn}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75 border-r-8 border-cyan-600"
                viewBox="0 0 24 24"
                onClick={handleZoomIn}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            )}
          </div>
          <div className="w-2/4 lg:w-1/4">
            <div className="text-xl font-medium dark:text-white text-center mb-1">
              ZOOM
            </div>
          </div>
          <div className="w-20 transform rotate-180">
            {zoom === "in" || zoom === "initial" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75"
                viewBox="0 0 24 24"
                onClick={handleZoomOut}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-indigo-700 cursor-pointer transform hover:scale-105 transition-all duration-75 border-r-8 border-cyan-600"
                viewBox="0 0 24 24"
                onClick={handleZoomOut}
              >
                <path d="M3 12l18-12v24z" />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-gray-800 text-white rounded-lg flex justify-center items-center h-96 relative">
        <span className="absolute h-10 bg-indigo-700 w-2/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute w-20 cursor-pointer transform transition-all duration-100 scale-105 -rotate-180 -left-1/4 -top-1/2 ${
              pan === "right" ? "fill-red-700" : "fill-indigo-700"
            }`}
            viewBox="0 0 24 24"
            onClick={handlePanRight}
          >
            <path d="M21 12l-18 12v-24z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute w-20 cursor-pointer transform transition-all duration-100 scale-105 -right-1/4 -top-1/2 ${
              pan === "left" ? "fill-red-700" : "fill-indigo-700"
            }`}
            viewBox="0 0 24 24"
            onClick={handlePanLeft}
          >
            <path d="M21 12l-18 12v-24z" />
          </svg>
        </span>
        <span className="absolute h-3/5 bg-indigo-700 w-10"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute w-20 cursor-pointer transform transition-all duration-100 top-4 -rotate-90 hover:scale-105 ${
            pan === "up" ? "fill-red-700" : "fill-indigo-700"
          } `}
          viewBox="0 0 24 24"
          onClick={handlePanUp}
        >
          <path d="M21 12l-18 12v-24z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute w-20 cursor-pointer transform transition-all duration-100 bottom-4 rotate-90 hover:scale-105 ${
            pan === "bot" ? "fill-red-700" : "fill-indigo-700"
          }`}
          viewBox="0 0 24 24"
          onClick={handlePanBot}
        >
          <path d="M21 12l-18 12v-24z" />
        </svg>
      </div>
    </div>
  );
};

export default App;
