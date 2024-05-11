import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      color1="orange"
      para1="  and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible."
      firstpara="yes i got it right"
    />
    <App
      color1={"blue"}
      para1="  Mirlburn library listen to some jazz while happy coding "
      firstpara="today is May 11 2024 "
      mystar=" i'm sitting at "
    />

    <App
      firstpara="Space travel is the ultimate adventure! Imagine soaring past the stars and
      exploring new worlds"
      para1=" were sent to roam around on Mars."
      color1="purple"
      background="#D3D3D3
"
    />

    <App />
  </React.StrictMode>
);
