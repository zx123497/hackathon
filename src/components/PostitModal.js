import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import postitBlue from "./../assets/images/postit/postit_blue.png";

const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  img: {
    width: "250px",
  },
  content: {
    width: "250px",
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  author: {
    textAlign: "right",
    paddingRight: "50px",
  },
});

const PostitModal = () => {
  const classes = useStyles();

  const postits = [
    { id: 1, content: "this is a test of postit", author: "manager" },
    { id: 2, content: "smells like teen spirit", author: "haha" },
    { id: 3, content: "daydream believer", author: "The Monkees" },
    { id: 4, content: "Fly me to the moon", author: "John" },
  ];

  const body = (
    <Box display="flex" flexWrap="wrap">
      {postits.map((postit) => (
        <Box key={postit.id} className={classes.root}>
          <img className={classes.img} src={postitBlue} alt={postit.content} />
          <div className={classes.content}>
            {postit.content}
            <div className={classes.author}>{postit.author}</div>
          </div>
        </Box>
      ))}
    </Box>
  );

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default PostitModal;
