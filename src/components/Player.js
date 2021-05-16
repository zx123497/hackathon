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
import Disk from "./Disk";
import theme from "./../themes/theme";

const useStyles = makeStyles({});

const Player = (props) => {
  const classes = useStyles();

  const [posts, setPosts] = useState(props.posts);
  const [openEditDialog, setOpenEditModal] = useState(false);
  const [input, setInput] = useState("");
  const [currentPost, setCurrentPost] = useState();

  return (
    <Box>
      <Box display="flex" flexWrap="wrap">
        {posts.map((post, index) => (
          <Disk key={index} content={post.content} author={post.author} />
        ))}
      </Box>

      <Dialog
        open={openEditDialog}
        onClose={() => {}}
        aria-labelledby="form-dialog-title"
      >
        <DialogActions></DialogActions>
      </Dialog>
    </Box>
  );
};

export default Player;
