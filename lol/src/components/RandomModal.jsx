import React, { useState } from "react";

import bein1 from "../assets/bein1.png";
import bein2 from "../assets/bein2.png";

import varus1 from "../assets/varus_1350.png";
import varus2 from "../assets/barus_950.png";
import varus3 from "../assets/varus2_1350.png";

import ash1 from "../assets/ash1.png";
import ash2 from "../assets/ash2.png";
import ash3 from "../assets/ash3.png";

import izreal1 from "../assets/izreal_1350.png";

import zin1 from "../assets/zin1.png";
import zin2 from "../assets/zin2.png";

import kaisa1 from "../assets/kaisa_1350.png";

import rusian1 from "../assets/rusian_1350.png";
import rusian2 from "../assets/rusian2_1350.png";
import rusian3 from "../assets/rusian3_1350.png";

const imageList = [
  varus1,
  varus2,
  varus3,
  bein1,
  bein2,
  ash1,
  ash2,
  ash3,
  izreal1,
  zin1,
  zin2,
  kaisa1,
  rusian1,
  rusian2,
  rusian3,
];

const RandomImage = () => {
  const [randomImage, setRandomImage] = useState("");

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    const selectedImage = imageList[randomIndex];
    setRandomImage(selectedImage);
  };

  return (
    <>
      <div onClick={selectRandomImage}/>
      {randomImage && <img src={randomImage} alt="Random Image" />}
    </>
  );
};
export default RandomImage;
