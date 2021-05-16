import React, { useState, useEffect, useRef } from "react";
import useInterval from "./useInterval";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./../themes/theme";
import coffee0 from "./../assets/images/coffee_0.png";
import coffee1 from "./../assets/images/coffee_1.png";
import coffee2 from "./../assets/images/coffee_2.png";
import coffee3 from "./../assets/images/coffee_3.png";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { Howl, Howler } from "howler";
import hotTea from "./../assets/sounds/hot_tea.mp3";
import CoffeeService from "../services/CoffeeService";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Box } from "@material-ui/core";
import moment from "moment";
import Cookies from "js-cookie";

const useStyles = makeStyles({
  image: {
    width: 250,
  },
  cover: {
    objectFit: "cover",
    width: "100%",
  },
});

const Coffee = (props) => {
  const TIME_NEED = 3;
  const classes = useStyles();
  const images = [coffee0, coffee1, coffee2, coffee3];

  const [image, setImage] = useState(coffee0);
  const [until, setUntil] = useState();
  const [sound, setSound] = useState(
    new Howl({
      src: [hotTea],
    })
  );
  const [disabled, setDisabled] = useState(true);

  let lastTimeString = Cookies.get("lastTimeDrink");

  useEffect(() => {
    if (lastTimeString === undefined) {
      const now = moment();
      Cookies.set("lastTimeDrink", now.toString());
      lastTimeString = now.toString();
    }
    const newUntil = TIME_NEED - diffToMin(moment(), moment(lastTimeString));
    setUntil(newUntil >= 0 ? newUntil : 0);
  }, []);

  useInterval(() => {
    if (until > 0) {
      const newUntil = TIME_NEED - diffToMin(moment(), moment(lastTimeString));
      setUntil(newUntil >= 0 ? newUntil : 0);
      console.log(until);
      return;
    }

    setDisabled(false);
  }, 1000);

  // const countDown = () => {
  //   const interval = setInterval(() => {
  //     if (until > 0) {
  //       const newUntil =
  //         TIME_NEED - diffToMin(moment(), moment(lastTimeString));
  //       setUntil(newUntil >= 0 ? newUntil : 0);
  //       console.log(until);
  //     } else {
  //       clearInterval(interval);
  //       refreshUntil();
  //     }
  //   }, 1000);
  // };

  const refreshUntil = () => {
    lastTimeString = moment().toString();
    Cookies.set("lastTimeDrink", lastTimeString);
    setUntil(TIME_NEED - diffToMin(moment(), moment(lastTimeString)));
    console.log("refresh: " + until);

    CoffeeService.postAddPrize(1, {
      First: "150",
    }).then((res) => {
      alert(res);
      // new Noty({
      //   type: "info",
      //   layout: "topRight",
      //   theme: "nest",
      //   text: `新增便利貼成功`,
      //   timeout: "4000",
      //   progressBar: true,
      //   closeWith: ["click"],
      // }).show();
    });
  };

  const handleStartFill = () => {
    if (until > 0) {
      return;
    }

    setDisabled(true);

    // Play the sound.
    sound.play();

    // Change global volume.
    Howler.volume(0.5);
    let num = 0;
    const interval = setInterval(() => {
      if (num > 3) {
        clearInterval(interval);
        refreshUntil();
        return;
      }
      setImage(images[num++]);
    }, 1500);
  };

  const list = [
    { rank: 1, name: "John Doe", amount: "1000c.c." },
    { rank: 2, name: "Jimi Hendrix", amount: "850.c." },
    { rank: 3, name: "Kurt Kobain", amount: "700c.c." },
    { rank: 4, name: "Janis Joplin", amount: "500c.c." },
  ];

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Box>還剩{until}分鐘</Box>
      </Grid>
      <Grid item>
        <Box className={classes.image}>
          <img className={classes.cover} src={image} />
        </Box>
      </Grid>
      <Grid item width="100%">
        <Button
          variant="contained"
          width="100%"
          color="primary"
          onClick={handleStartFill}
          disabled={disabled}
        >
          Fill
        </Button>
      </Grid>
    </Grid>
  );
};

export default Coffee;

function diffToMin(moment1, moment2) {
  const diff = moment1.diff(moment2);
  return Math.floor(moment.duration(diff).asMinutes());
}
