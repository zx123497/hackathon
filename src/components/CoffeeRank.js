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

const CoffeeRank = (props) => {
  const classes = useStyles();

  const newList = [...props.list];
  newList.sort(compare);

  const [list, setList] = useState(newList);

  return (
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
  );
};

export default CoffeeRank;

function compare(a, b) {
  if (a.rank < b.rank) {
    return -1;
  }
  if (a.rank > b.rank) {
    return 1;
  }
  return 0;
}
