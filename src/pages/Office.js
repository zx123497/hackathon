import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import bulletinBoard from "./../assets/images/keijiban.png";
import timecardMachine from "./../assets/images/timecard_machine.png";
import waterServer from "./../assets/images/drink_water_server.png";
import printer from "./../assets/images/kaden_printer.png";
import leaderboard from "./../assets/images/champion_board.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ChatRoom from "./../components/ChatRoom";
import PostList from "../components/PostList";
import theme from "./../themes/theme";
import Modal from "../components/Modal/Modal";

const useStyles = makeStyles({
  bookshelf: {
    maxHeight: "80%",
    width: "auto",
    position: "fixed",
    bottom: "1em",
    left: "2em",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  bulletinBoard: {
    maxHeight: "80%",
    width: "auto",
    position: "fixed",
    bottom: "1em",
    left: "50%",
    // maxWidth: "300px",
    maxWidth: "50%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  office: {
    position: "relative",
    "& .chatroom": {
      position: "fixed",
      bottom: theme.spacing(0),
      right: theme.spacing(0),
    },
  },
  Modal: {
    "& .title": {
      color: theme.palette.primary.main,
      margin: "auto",
    },
    "& .uploadBtn": {
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
    },
    "& .files": {
      margin: "2rem auto",
      backgroundColor: theme.palette.background.default,
      width: "30rem",
      height: "20rem",
    },
  },
});

const Office = () => {
  const classes = useStyles();

  const [modalOpenState, setModalOpenState] = useState({
    open: false,
    body: <></>,
  });

  const handleModalOpen = () => {
    // Not working now.
    setModalOpenState({ ...modalOpenState, open: true });
  };

  const handleBookshelf = () => {
    handleModalOpen();
    const body = (
      <>
        <h3 className="title">~檔案櫃~</h3>
        <div className="files"></div>
        <Button className="uploadBtn">上傳檔案</Button>
      </>
    );
    setModalOpenState({ ...modalOpenState, open: true, body });
  };

  const handleBulletinBoard = () => {
    const body = (
      <PostList
        posts={[
          { id: 1, content: "this is a test of postit", author: "manager" },
          { id: 2, content: "smells like teen spirit", author: "haha" },
          { id: 3, content: "daydream believer", author: "The Monkees" },
          { id: 4, content: "Fly me to the moon", author: "John" },
          { id: 5, content: "Fly me to the moon", author: "John" },
          { id: 6, content: "Fly me to the moon", author: "John" },
          { id: 7, content: "Fly me to the moon", author: "John" },
        ]}
      />
    );
    setModalOpenState({ ...modalOpenState, open: true, body });
  };

  const handleModalClose = () => {
    setModalOpenState({
      open: false,
    });
  };

  return (
    <div className={classes.office}>
      <div className="chatroom">
        <ChatRoom />
      </div>
      <img
        className={classes.bookshelf}
        src={bookshelf}
        alt="bookshelf"
        onClick={handleBookshelf}
      />
      <img
        className={classes.bulletinBoard}
        src={bulletinBoard}
        alt="bulletin board"
        onClick={handleBulletinBoard}
      />
      {/* <img
        className={classes.bookshelf}
        src={timecardMachine}
        alt="bookshelf"
      />
      <img className={classes.bookshelf} src={waterServer} alt="bookshelf" />
      <img className={classes.bookshelf} src={leaderboard} alt="bookshelf" />
      <img className={classes.bookshelf} src={printer} alt="bookshelf" /> */}
      <Modal
        className={classes.Modal}
        opened={modalOpenState.open}
        handleClose={handleModalClose}
      >
        {modalOpenState.body}
      </Modal>
    </div>
  );
};

export default Office;
