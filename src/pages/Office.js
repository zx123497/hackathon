import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import background from "./../assets/images/background.png";
import timecard from "./../assets/images/timecard_machine.png";
import bulletinBoard from "./../assets/images/keijiban.png";
import { Button } from "@material-ui/core";
import timecardMachine from "./../assets/images/timecard_machine.png";
import waterServer from "./../assets/images/drink_water_server.png";
import printer from "./../assets/images/kaden_printer.png";
import leaderboard from "./../assets/images/champion_board.png";
import Container from "@material-ui/core/Container";
import ChatRoom from "./../components/ChatRoom";
import PostList from "../components/PostList";
import theme from "./../themes/theme";
import Modal from "../components/Modal/Modal";
import desk from "../assets/images/work_desk.png";
import doorclose from "../assets/images/door_close.png";
import dooropen from "../assets/images/door_half_open.png";
import Telephone from "./../assets/images/telephone_oyaki.png";
import { mergeClasses } from "@material-ui/styles";
import PhoneBook from "../components/PhoneBook";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FBC",
  },
  media: {
    height: 140,
  },
  bookshelf: {
    maxHeight: "90%",
    width: "auto",
    position: "fixed",
    bottom: "1rem",
    left: "5%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  door: {
    maxHeight: "75%",
    width: "auto",
    position: "fixed",
    bottom: "7%",
    left: "75%",
    // "&:hover": {
    //   transform: "scale(1.05)",
    //   transition: "0.5s",
    //   cursor: "pointer",
    // },
  },
  timecard: {
    maxHeight: "15%",
    width: "auto",
    position: "fixed",
    bottom: "35%",
    left: "47%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  desk: {
    maxHeight: "40%",
    width: "30%",
    position: "fixed",
    bottom: "1rem",
    left: "30%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  floor: {
    height: "20%",
    width: "100vw",
    backgroundColor: "#AF8A23",
    position: "fixed",
    bottom: 0,
    left: 0,
  },
  bulletinBoard: {
    maxHeight: "45%",
    width: "auto",
    position: "fixed",
    bottom: "50 rem",
    left: "30%",
    // maxWidth: "300px",
    maxWidth: "50%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  office: {
    backgroundColor: "#DFB285",
    height: "93vh",

    "& .chatroom": {
      position: "fixed",
      bottom: theme.spacing(0),
      right: theme.spacing(0),
    },
    "& .background": {
      width: "120vw",

      position: "absolute",
      overflow: "auto",
    },
    "& .content": {
      position: "relative",
    },
  },
  telephone: {
    maxHeight: "15%",
    width: "auto",
    position: "fixed",
    bottom: "35%",
    left: "35%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  Modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .title": {
      color: theme.palette.primary.main,
      margin: "auto",
    },
    "& .uploadBtn": {
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
    },
    "& .signBtn": {
      backgroundColor: theme.palette.primary.main,
      color: "#FFF",
      width: "4rem",
      height: "4rem",
      borderRadius: "50%",
      boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
    },
    "& .files": {
      margin: "2rem auto",
      backgroundColor: theme.palette.background.default,
      width: "30rem",
      height: "20rem",
    },
  },
  word: {
    textAlign: "center",
  },
});

const Office = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [arrive, setArrive] = useState(false);
  const [modalOpenState, setModalOpenState] = useState({
    open: false,
    openTimeCard: false,
    body: <></>,
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

  useEffect(() => {
    const fakeTime = [
      { name: "Eric", arrive_time: "00:00:00", leave_time: "12:00:00" },
      { name: "Amanda", arrive_time: "00:00:00", leave_time: "12:00:00" },
      { name: "Amy", arrive_time: "00:00:00", leave_time: "12:00:00" },
    ];
    setRows(fakeTime);
  }, []);
  const handleModalOpen = () => {
    setModalOpenState({ ...modalOpenState, open: true });
  };
  const handleBookshelf = () => {
    const body = (
      <>
        <h3 className="title">~檔案櫃~</h3>
        <div className="files"></div>
        <Button className="uploadBtn">上傳檔案</Button>
      </>
    );
    setModalOpenState({ ...modalOpenState, open: true, body });
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

  const handleArrive = () => {
    const arrive = { name: "Emily", arrive_time: "09:00:00", leave_time: "" };
    const new_arr = rows.concat(arrive);
    setRows(new_arr);
    setArrive(true);
    console.log(rows);
  };
  const handleLeave = () => {
    const arr = rows.filter((row) => {
      return row.name !== "Emily";
    });
    const leave = {
      name: "Emily",
      arrive_time: "09:00:00",
      leave_time: "14:00:00",
    };
    const new_arr = arr.concat(leave);
    setRows(new_arr);
    setArrive(false);
    console.log(rows);
  };

  const handleTimeCard = () => {
    setModalOpenState({ ...modalOpenState, openTimeCard: true });
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
      openTimeCard: false,
    });
  };

  return (
    <div className={classes.office}>
      <div className={classes.floor}></div>

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
      <Link to={"/"}>
        <img
          className={classes.door}
          src={doorclose}
          onMouseOver={(e) => (e.currentTarget.src = dooropen)}
          onMouseOut={(e) => (e.currentTarget.src = doorclose)}
          alt="bulletin board"
        />
      </Link>

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

      <img
        className={classes.desk}
        src={desk}
        alt="bulletin board"
        onClick={handleTimeCard}
      />
      <img
        className={classes.timecard}
        src={timecard}
        alt="bulletin board"
        onClick={handleTimeCard}
      />
      <img
        src={Telephone}
        className={classes.telephone}
        onClick={handleTelephone}
      />
      {/* <img
        className={classes.bookshelf}
        className={classes.timecard}
        src={timecardMachine}
        alt="bookshelf"
        onClick={handleTimeCard}
      />
      <img
        className={classes.bulletinBoard}
        src={bulletinBoard}
        alt="bookshelf"
        onClick={handleTimeCard}
      />

      {/* 
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
      <Modal
        className={classes.Modal}
        opened={modalOpenState.openTimeCard}
        handleClose={handleModalClose}
      >
        <h3 className="title">打卡機</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">打卡人</TableCell>
                <TableCell align="right">上班時間</TableCell>
                <TableCell align="right">下班時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.arrive_time}</TableCell>
                  <TableCell align="right">{row.leave_time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
        >
          <Button
            className="signBtn"
            onClick={arrive ? handleLeave : handleArrive}
          >
            {arrive ? "下班" : "上班"}
          </Button>
        </div>
      </Modal>
      <div className="chatroom">
        <ChatRoom />
      </div>
    </div>
  );
};

export default Office;
