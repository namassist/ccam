import { useState } from "react";

const App = () => {
  const [zoom, setZoom] = useState(10);
  const [blur, setBlur] = useState(0);
  const [value, setValue] = useState(0);
  const [blurs, setBlurs] = useState(0);

  const handleZoomIn = (e) => {
    e.preventDefault();
    if (zoom === 14) {
      alert("maximal");
    } else {
      setZoom(zoom + 1);
      setValue(value + 1);
    }
  };

  const handleZoomOut = (e) => {
    e.preventDefault();
    if (zoom === 6) {
      alert("minimal");
    } else {
      setZoom(zoom - 1);
      setValue(value - 1);
    }
  };

  const handleFocusIn = (e) => {
    e.preventDefault();
    if (blur === 2) {
      alert("maximal");
    } else {
      setBlur(blur + 1);
      setBlurs(blurs + 1);
    }
  };

  const handleFocusOut = (e) => {
    e.preventDefault();
    if (blur === -2) {
      alert("minimal");
    } else {
      setBlur(blur - 1);
      setBlurs(blurs - 1);
    }
  };

  return (
    <div className="w-full lg:h-screen items-center justify-center bg-zinc-900 space-y-5 p-5 lg:flex lg:space-y-0 lg:space-x-5">
      <div className="w-full lg:w-6/12 bg-gray-800 py-20 text-white space-y-5 rounded-lg h-96">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-20 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-indigo-700 cursor-pointer transform hover:scale-105 hover:fill-indigo-600 transition-all duration-200"
              viewBox="0 0 24 24"
              onClick={handleFocusOut}
            >
              <path d="M3 12l18-12v24z" />
            </svg>
          </div>
          <div className="w-2/4 lg:w-1/4">
            <div className="text-xl font-medium dark:text-white text-center mb-1">
              FOCUS
            </div>
            <div className="bg-gray-200 rounded-full h-1.5">
              <div
                className={`bg-cyan-600 h-1.5 rounded-full wf${blurs} transition-all duration-300`}
              ></div>
            </div>
            <div className="text-xs text-center mt-1 tracking-wide">
              x.{blurs}
            </div>
          </div>
          <div className="w-20 transform rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-indigo-700 cursor-pointer transform hover:scale-105 hover:fill-indigo-600 transition-all duration-200"
              viewBox="0 0 24 24"
              onClick={handleFocusIn}
            >
              <path d="M3 12l18-12v24z" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-indigo-700 cursor-pointer transform hover:scale-105 hover:fill-indigo-600 transition-all duration-200"
              viewBox="0 0 24 24"
              onClick={handleZoomOut}
            >
              <path d="M3 12l18-12v24z" />
            </svg>
          </div>
          <div className="w-2/4 lg:w-1/4">
            <div className="text-xl font-medium dark:text-white text-center mb-1">
              ZOOM
            </div>
            <div className="bg-gray-200 rounded-full h-1.5">
              <div
                className={`bg-cyan-600 h-1.5 rounded-full w${value} transition-all duration-300`}
              ></div>
            </div>
            <div className="text-xs text-center mt-1 tracking-wide">
              x.{value}
            </div>
          </div>
          <div className="w-20 transform rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-indigo-700 cursor-pointer transform hover:scale-105 hover:fill-indigo-600 transition-all duration-200"
              viewBox="0 0 24 24"
              onClick={handleZoomIn}
            >
              <path d="M3 12l18-12v24z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-gray-800 p-5 text-white rounded-lg flex justify-center items-center h-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-60 fill-indigo-600 transform scale-${zoom} blur${blur}`}
          viewBox="0 0 24 24"
        >
          <path d="M24 12l-6-5v4h-5v-5h4l-5-6-5 6h4v5h-5v-4l-6 5 6 5v-4h5v5h-4l5 6 5-6h-4v-5h5v4z" />
        </svg>
      </div>
    </div>
  );
};

export default App;
