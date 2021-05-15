import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Post from "./Post";
import theme from "./../themes/theme";

const useStyles = makeStyles({
  fab: {
    float: "right",
    bottom: theme.spacing(10),
    right: theme.spacing(5),
  },
});

const PostList = (props) => {
  const classes = useStyles();

  const [posts, setPosts] = useState(props.posts);
  const [openEditDialog, setOpenEditModal] = useState(false);
  const [input, setInput] = useState("");
  const [currentPost, setCurrentPost] = useState();

  const handleEdit = (post) => {
    setCurrentPost(post);
    setInput(post.content);
    setOpenEditModal(true);
  };

  const handleTextChange = (e) => {
    setInput(e.target.value);
    setCurrentPost({ ...currentPost, content: e.target.value });
  };

  const handleSave = () => {
    if (currentPost.id === undefined) {
      console.log(currentPost);
      handleChange(currentPost, "add");
    } else {
      handleChange(currentPost, "update");
    }
    setOpenEditModal(false);
  };

  const handleAdd = () => {
    setCurrentPost({});
    setOpenEditModal(true);
  };

  const handleChange = (target, action) => {
    let newPosts;

    switch (action) {
      case "add":
        newPosts = posts.concat(target);
        break;
      case "delete":
        newPosts = posts.filter((post) => post !== target);
        break;
      case "update":
        newPosts = posts.map((post) => (post.id === target.id ? target : post));
        break;
      default:
        break;
    }
    console.log(newPosts);
    setPosts(newPosts);
  };

  return (
    <Box bgcolor="green">
      <Typography p={20} variant="h4" component="h2" color="white">
        揭示板
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {posts.map((post, index) => (
          <Post
            key={index}
            content={post.content}
            author={post.author}
            time={post.time}
            handleEdit={() => handleEdit(post)}
            handleDelete={() => handleChange(post, "delete")}
          />
        ))}
      </Box>
      <Fab
        className={classes.fab}
        aria-label="add"
        color="primary"
        onClick={handleAdd}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={openEditDialog}
        onClose={() => {}}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            defaultValue={input}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={input}
            onChange={handleTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button
            onClick={() => {
              setOpenEditModal(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PostList;
