import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./../themes/theme";
import coffee0 from "./../assets/images/coffee_0.png";
import coffee1 from "./../assets/images/coffee_1.png";
import coffee2 from "./../assets/images/coffee_2.png";
import coffee3 from "./../assets/images/coffee_3.png";
import "./../coffee.css";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  image: {
    width: 200,
  },
  cover: {
    objectFit: "cover",
    width: "100%",
  },
});

const Coffee = (props) => {
  const classes = useStyles();
  const images = [coffee0, coffee1, coffee2, coffee3];

  const [image, setImage] = useState(coffee0);

  const handleStartFill = () => {
    setTimeout(() => {
      setImage(images[1]);
    }, 1000);
    setTimeout(() => {
      setImage(images[2]);
    }, 2000);
    setTimeout(() => {
      setImage(images[3]);
    }, 3000);
  };

  return (
    <div>
      <img src={image} />
      <Button onClick={handleStartFill}>Fill</Button>
    </div>
  );
};

export default Coffee;
