import React from "react";
import "./HomeComp.css";

const Gif = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "40px",
      }}
    >
      <img
        // src="https://i.imgur.com/LceFh7K.gif"
        src="https://i.imgur.com/rXf9qSD.gif"
        title=""
        alt="nai"
        className="gifImg"
      />
    </div>
  );
};

export default Gif;
