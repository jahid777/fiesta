import React from "react";
import Carousal from "./HomeComp/Carousal";
import Gif from "./HomeComp/Gif";
import HomeProduct from "./HomeComp/homeProduct";

const Home = () => {
  return (
    <div>
      <Carousal />
      <Gif />
      <HomeProduct />
    </div>
  );
};

export default Home;
