import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Post from "./Post";

const useStyles = makeStyles({});

const PostList = (props) => {
  const classes = useStyles();

  const [posts, setPosts] = useState(props.posts);
  const [openEditDialog, setOpenEditModal] = useState(false);
  const [input, setInput] = useState("");
  const [currentPost, setCurrentPost] = useState();

  const handleEdit = (id) => {
    const post = posts.find((post) => post.id === id);
    setCurrentPost(post);
    setInput(post.content);
    setOpenEditModal(true);
  };

  const handleDelete = (id) => {
    const post = posts.find((post) => post.id === id);
    setCurrentPost(post);
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const handleSave = () => {
    const newPosts = posts.map((post) => {
      if (post === currentPost) {
        return { ...currentPost, content: input };
      }
      return post;
    });
    setPosts(newPosts);
    console.log(posts);
    setOpenEditModal(false);
  };

  const handleTextChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Box bgcolor="green">
      <Typography p={20} variant="h4" component="h2">
        揭示板
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {posts.map((post, index) => (
          <Post
            key={index}
            content={post.content}
            author={post.author}
            time={post.time}
            handleEdit={() => handleEdit(post.id)}
            handleDelete={() => handleDelete(post.id)}
          />
        ))}
      </Box>
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
