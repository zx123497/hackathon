import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import Container from "@material-ui/core/Container";
import ChatRoom from "./../components/ChatRoom";
import theme from "./../themes/theme";
import Modal from "../components/Modal/Modal";
import Telephone from "./../assets/images/telephone_oyaki.png";
import { mergeClasses } from "@material-ui/styles";
import PhoneBook from "../components/PhoneBook";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
  bookshelf: {
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
  telephone: {
    maxHeight: "10%",
    maxWidth: "10%",
    transform: "scale(1.05)",
    transition: "0.5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  word: {
    textAlign: "center",
  },
});

const Office = () => {
  const classes = useStyles();

  const [modalOpenState, setModalOpenState] = useState({
    open: false,
  });

  const [TelephoneOpenState, setTelephoneOpenState] = useState({
    open: false,
  });

  const userphone = [
    { name: "Emily Chen", phonenum: "0901234567" },
    { name: "Kevin Niu", phonenum: "0901234567" },
    { name: "Allen Hsieh", phonenum: "0901234567" },
    { name: "Martin Lee", phonenum: "0901234567" },
    { name: "Harrison Lin", phonenum: "0901234567" },
  ];

  const handleModalOpen = () => {
    setModalOpenState({ ...modalOpenState, open: true });
  };
  const handleBookshelf = () => {
    handleModalOpen();
  };

  const handleTelephoneOpen = () => {
    setTelephoneOpenState({ ...TelephoneOpenState, open: true });
  };

  const handleTelephone = () => {
    handleTelephoneOpen();
  };

  const handleTelephoneClose = () => {
    setTelephoneOpenState({
      open: false,
    });
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
        src={Telephone}
        className={classes.telephone}
        onClick={handleTelephone}
      />
      <Modal
        opened={TelephoneOpenState.open}
        handleClose={handleTelephoneClose}
      >
        <h4 className={classes.word}>PhoneBook</h4>
        <br></br>
        {userphone.map((phone) => (
          <PhoneBook phone={phone}></PhoneBook>
        ))}
      </Modal>
      <img
        className={classes.bookshelf}
        src={bookshelf}
        alt="bookshelf"
        onClick={handleBookshelf}
      />
      welcome to the office.
      <Modal opened={modalOpenState.open} handleClose={handleModalClose}>
        <h3 className="title">~檔案櫃~</h3>
      </Modal>
    </div>
  );
};

export default Office;
