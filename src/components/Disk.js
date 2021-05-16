import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import postBlue from "./../assets/images/music_record_disc.png";
import theme from "./../themes/theme";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  root: {
    width: 250,
    position: "relative",
    margin: theme.spacing(2),
  },
  image: {
    width: "100%",
    objectFit: "cover",
  },

  author: {
    position: "center",
  },
});

const Disk = (props) => {
  const classes = useStyles();
  const { handleEdit, handleDelete, author, content } = { ...props };

  return (
    <div style={{ textAlign: "center" }} className={classes.root}>
      <img className={classes.image} src={postBlue} alt={content} />

      <div className={classes.author}>{author}</div>
    </div>
  );
};

export default Disk;
