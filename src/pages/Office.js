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
import coffeeMachine from "./../assets/images/coffee_self_service.png";
import locker from "./../assets/images/kagu_cabinet_locker_close.png";
import Container from "@material-ui/core/Container";
import ChatRoom from "./../components/ChatRoom";
import Coffee from "./../components/Coffee";
import PostList from "../components/PostList";
import theme from "./../themes/theme";
import Modal from "../components/Modal/Modal";
import desk from "../assets/images/work_desk.png";
import doorclose from "../assets/images/door_close.png";
import dooropen from "../assets/images/door_half_open.png";
import Telephone from "./../assets/images/telephone_oyaki.png";
import { mergeClasses } from "@material-ui/styles";
import PhoneBook from "../components/PhoneBook";
import Music from "../assets/images/music_chikuonki.png";
import Player from "../components/Player";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Mozart from "./../assets/images/Mozart.jpg";
import PostService from "../services/PostService";
import { Howl, Howler } from "howler";
import bgm from "./../assets/sounds/bgm.mp3";
import Input from "../components/Input/Input";
import useTheme from "@material-ui/core/styles/useTheme";
import FileService from "../services/FileService";
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
    left: "-3%",
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
    bottom: "44.3%",
    left: "24%",
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
    left: "32%",
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
    left: "37%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  locker: {
    maxHeight: "35%",
    width: "auto",
    position: "fixed",
    bottom: "15%",
    left: "63%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  locker2: {
    maxHeight: "30%",
    width: "auto",
    position: "fixed",
    bottom: "15%",
    left: "23%",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.5s",
      cursor: "pointer",
    },
  },
  coffeeMachine: {
    maxHeight: "20%",
    width: "auto",
    position: "fixed",
    bottom: "48%",
    left: "63.3%",
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
  music: {
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
});
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

const Office = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [posts, setPosts] = useState([]);
  const [arrive, setArrive] = useState(false);
  const [myrows, setmyRows] = useState([]);
  const [modalOpenState, setModalOpenState] = useState({
    open: false,
    openTimeCard: false,
    openBook: false,
    body: <></>,
    file: "",
  });

  const [TelephoneOpenState, setTelephoneOpenState] = useState({
    open: false,
  });

  const [MusicOpenState, setMusicOpenState] = useState({
    open: false,
  });
  const sound = new Howl({
    src: [bgm],
  });
  const handleMusicOpen = () => {
    setMusicOpenState({ ...MusicOpenState, open: true });
  };

  const handleMusic = () => {
    handleMusicOpen();
  };

  const handleMusicClose = () => {
    setMusicOpenState({
      open: false,
    });
  };
  const [songs] = useState([
    {
      title: "K545",
      artist: "Mozart",
      src: Mozart,
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "",
      src: "",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "",
      src: "",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "",
      src: "",
    },
  ]);
  const [down, setDown] = useState([]);
  useEffect(() => {
    PostService.getPostList(1).then((res) => {
      console.log(res);
      let temp = [];
      res.map((row) => {
        temp.push(createRow(row));
      });
      setPosts(temp);
      const fakeTime = [
        { name: "Eric", arrive_time: "00:00:00", leave_time: "12:00:00" },
        { name: "Amanda", arrive_time: "00:00:00", leave_time: "12:00:00" },
        { name: "Amy", arrive_time: "00:00:00", leave_time: "12:00:00" },
      ];
      setRows(fakeTime);
      sound.play();
      FileService.getFileList().then((res) => {
        console.log(res);
        let down_temp = [];
        res.map((row) => {
          down_temp.push(createDown(row));
        });
        setDown(down_temp);
      });
    });

    const userphone = [
      { name: "Emily Chen", phonenum: "0901234567" },
      { name: "Kevin Niu", phonenum: "0901234567" },
      { name: "Allen Hsieh", phonenum: "0901234567" },
      { name: "Martin Lee", phonenum: "0901234567" },
      { name: "Harrison Lin", phonenum: "0901234567" },
    ];
    setmyRows(userphone);
  }, []);
  const createRow = (row) => {
    return { id: row.noteID, content: row.content, author: row.author };
  };
  // const userphone = [
  //   { name: "Emily Chen", phonenum: "0901234567" },
  //   { name: "Kevin Niu", phonenum: "0901234567" },
  //   { name: "Allen Hsieh", phonenum: "0901234567" },
  //   { name: "Martin Lee", phonenum: "0901234567" },
  //   { name: "Harrison Lin", phonenum: "0901234567" },
  // ];

  const handleFile = (id, value) => {
    setModalOpenState({ ...modalOpenState, file: value });
  };
  const handleModalOpen = () => {
    setModalOpenState({ ...modalOpenState, open: true });
  };
  const handleBookshelf = () => {
    setModalOpenState({ ...modalOpenState, openBook: true });
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
  const handlenewphone = () => {
    const namerow = { name: name, phonenum: pnum };
    const new_arr = myrows.concat(namerow);
    setmyRows(new_arr);

    console.log(new_arr);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleChangeNum = (e) => {
    setNum(e.target.value);
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
        // posts={[
        //   { id: 1, content: "this is a test of postit", author: "manager" },
        //   { id: 2, content: "smells like teen spirit", author: "haha" },
        //   { id: 3, content: "daydream believer", author: "The Monkees" },
        //   { id: 4, content: "Fly me to the moon", author: "John" },
        //   { id: 5, content: "Fly me to the moon", author: "John" },
        //   { id: 6, content: "Fly me to the moon", author: "John" },
        //   { id: 7, content: "Fly me to the moon", author: "John" },
        // ]}
        posts={posts}
      />
    );
    setModalOpenState({ ...modalOpenState, open: true, body });
  };

  const handleCoffeeMachine = () => {
    const body = <Coffee />;
    setModalOpenState({ ...modalOpenState, open: true, body });
  };

  const [name, setName] = useState("");
  const [pnum, setNum] = useState("");
  const handleModalClose = () => {
    setModalOpenState({
      open: false,
      openTimeCard: false,
      openBook: false,
      body: <></>,
      file: "",
    });
  };

  const handleUpload = () => {
    const data = modalOpenState.file;
    const body = new FormData();
    body.append("file", data);
    FileService.postFile(body).then((res) => {
      console.log(res);
      FileService.getFileList().then((res) => {
        let down_tmp = [];
        res.map((row) => {
          down_tmp.push(createDown(row));
        });
        setDown(down_tmp);
        handleModalClose();
      });
    });
  };
  const createDown = (data) => {
    return { fileName: data.fileName, url: data.url };
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
        <div>
          <tr>
            Name:{" "}
            <input
              className={classes.table}
              type="text"
              onChange={handleChange}
              value={name}
            />
          </tr>
          <br></br>
          <tr>
            Phone:{" "}
            <input
              className={classes.table}
              type="text"
              onChange={handleChangeNum}
              value={pnum}
            />
          </tr>
          <div style={{ display: "flex" }}>
            <span style={{ flexGrow: 1 }}></span>
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "1rem",
              }}
              onClick={handlenewphone}
              variant="outlined"
              color="primary"
            >
              Upload
            </Button>
          </div>
        </div>
        {myrows.map((phone) => (
          <PhoneBook phone={phone}></PhoneBook>
        ))}
      </Modal>
      <Link to={"/"}>
        <img
          className={classes.door}
          src={doorclose}
          onClick={() => {}}
          onMouseOver={(e) => {
            sound.pause();
            e.currentTarget.src = dooropen;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = doorclose;
          }}
          alt="bulletin board"
        />
      </Link>
      <Modal opened={MusicOpenState.open} handleClose={handleMusicClose}>
        <h3>My Music</h3>
        <Player
          posts={[
            { id: 1, author: "Mozart Piano" },
            { id: 2, author: "Pop Music" },
            { id: 3, author: "Rap Music" },
            { id: 4, author: "Tchaikovsky" },
            { id: 5, author: "Electronics" },
            { id: 6, author: "Paganini" },
            { id: 7, author: "Jay Chou" },
            { id: 8, author: "Schubert" },
          ]}
        />
      </Modal>

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
        className={classes.locker}
        src={locker}
        alt="coffee machine"
        onClick={handleCoffeeMachine}
      />
      <img
        className={classes.locker2}
        src={locker}
        alt="coffee machine"
        onClick={handleCoffeeMachine}
      />
      <img
        className={classes.coffeeMachine}
        src={coffeeMachine}
        alt="coffee machine"
        onClick={handleCoffeeMachine}
      />
      <img
        className={classes.timecard}
        src={timecard}
        alt="bulletin board"
        onClick={handleTimeCard}
      />
      <img
        className={classes.music}
        src={Music}
        alt="bulletin board"
        onClick={handleMusic}
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
        opened={modalOpenState.openBook}
        handleClose={handleModalClose}
      >
        <h3 className="title">~檔案櫃~</h3>
        <div className="files">
          {down.map((row) => (
            <div
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "#FFF",
                padding: "5px",
                borderRadius: "5px",

                margin: "2rem",
              }}
            >
              <a
                style={{
                  color: "#FFF",
                }}
                download
                target="_blank"
                href={row.url}
              >
                {row.fileName}
              </a>
            </div>
          ))}
        </div>
        <Input
          key="upload"
          id="upload"
          elementType="file"
          value={modalOpenState.file}
          onChange={handleFile}
          label="選擇上傳文件"
        />
        <Button
          onClick={handleUpload}
          style={{
            width: "100%",
            marginTop: "1rem",
            border: `1px ${theme.palette.primary.main} solid`,
            color: theme.palette.primary.main,
          }}
        >
          上傳文件
        </Button>
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
