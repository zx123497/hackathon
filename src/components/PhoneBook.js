import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { render } from "@testing-library/react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  mylist: {
    marginLeft: "auto",

    textAlign: "left",
    listStyleType: "none",
  },
  myrow: {
    padding: 10,
  },
});

const PhoneBook = (props) => {
  const classes = useStyles();

  const { name, phonenum } = props.phone;

  return (
    <tr className={classes.mylist}>
      <td className={classes.myrow}>{name}</td>
      <td>{phonenum}</td>
    </tr>
  );
};

export default PhoneBook;
