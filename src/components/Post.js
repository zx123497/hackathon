import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import postBlue from "./../assets/images/postit/postit_blue.png";
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
  content: {
    height: 250,
    position: "absolute",
    left: 0,
    top: 0,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(5),
  },
  author: {
    position: "absolute",
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    right: 0,
    bottom: 0,
  },
  buttons: {
    float: "right",
    position: "absolute",
    paddingRight: theme.spacing(3),
    top: 0,
    right: 0,
  },
});

const Post = (props) => {
  const classes = useStyles();
  const { handleEdit, handleDelete, author, time, content } = { ...props };

  return (
    <div className={classes.root}>
      <img className={classes.image} src={postBlue} alt={content} />
      <div className={classes.content}>{props.content}</div>
      <div className={classes.author}>{author}</div>
      <div className={classes.buttons}>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Post;
