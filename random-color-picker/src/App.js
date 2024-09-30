import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  // Function to generate random color
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  // Function to copy color to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color).then(
      () => {
        // alert(`Color ${color} copied to clipboard!`);
        toast("Copied !!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      },
      (err) => {
        alert("Failed to copy color: ", err);
      }
    );
  };

  return (
    <div className="App">
      <h1>Random Color Picker</h1>
      <div
        className="color-box"
        style={{
          backgroundColor: color,
          padding: "50px",
          marginBottom: "5px",
          margin: "20px",
        }}
      >
        <ToastContainer />
        {color}
      </div>
      <div className="button-box">
        <button
          className="button-G"
          onClick={generateRandomColor}
          style={{ backgroundColor: color }}
        >
          Generate
        </button>
        <button
          className="button-G"
          onClick={copyToClipboard}
          style={{ backgroundColor: color }}
        >
          Copy Color
        </button>
      </div>
    </div>
  );
}

export default App;
