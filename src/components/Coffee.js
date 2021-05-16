import React, { useState, useEffect, useRef } from "react";
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

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Box } from "@material-ui/core";

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
  const classes = useStyles();
  const images = [coffee0, coffee1, coffee2, coffee3];

  const [image, setImage] = useState(coffee0);

  const sound = new Howl({
    src: [hotTea],
  });

  const handleStartFill = () => {
    // Play the sound.
    sound.play();

    // Change global volume.
    Howler.volume(0.5);
    let num = 0;
    const interval = setInterval(() => {
      if (num > 3) {
        clearInterval(interval);
        return;
      }
      setImage(images[num++]);
    }, 1500);
    // setTimeout(() => {
    //   setImage(images[1]);
    // }, 1500);
    // setTimeout(() => {
    //   setImage(images[2]);
    // }, 3000);
    // setTimeout(() => {
    //   setImage(images[3]);
    // }, 4500);
  };

  const list = [
    { rank: 1, name: "John Doe", amount: "1000c.c." },
    { rank: 2, name: "Jimi Hendrix", amount: "850.c." },
    { rank: 3, name: "Kurt Kobain", amount: "700c.c." },
    { rank: 4, name: "Janis Joplin", amount: "500c.c." },
  ];

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      alignItems="flex-end"
      spacing={5}
    >
      <Grid item>
        <div>
          <List>
            {list.map((item) => (
              <ListItem>
                <ListItemAvatar>{item.rank}</ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.amount} />
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
      <Grid item>
        <Box className={classes.image}>
          <img className={classes.cover} src={image} />
          <Button onClick={handleStartFill}>Fill</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Coffee;
