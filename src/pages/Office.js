import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import bulletinBoard from "./../assets/images/keijiban.png";
import timecardMachine from "./../assets/images/timecard_machine.png";
import waterServer from "./../assets/images/drink_water_server.png";
import printer from "./../assets/images/kaden_printer.png";
import leaderboard from "./../assets/images/champion_board.png";
import ChatRoom from "./../components/ChatRoom";
import theme from "./../themes/theme";

const useStyles = makeStyles({
  bookshelf: {
    maxHeight: "80%",
    width: "auto",
    position: "fixed",
    bottom: "1em",
    left: "2em",
  },
  bulletinBoard: {
    maxHeight: "80%",
    width: "auto",
    position: "fixed",
    bottom: "1em",
    left: "50%",
  },
  office: {
    position: "relative",
    "& .chatroom": {
      position: "fixed",
      bottom: theme.spacing(0),
      right: theme.spacing(0),
    },
  },
});

const Office = () => {
  const classes = useStyles();

  return (
    <div className={classes.office}>
      <div className="chatroom">
        <ChatRoom />
      </div>
      <img className={classes.bookshelf} src={bookshelf} alt="bookshelf" />
      <img
        className={classes.bulletinBoard}
        src={bulletinBoard}
        alt="bulletin board"
      />
      {/* <img
        className={classes.bookshelf}
        src={timecardMachine}
        alt="bookshelf"
      />
      <img className={classes.bookshelf} src={waterServer} alt="bookshelf" />
      <img className={classes.bookshelf} src={leaderboard} alt="bookshelf" />
      <img className={classes.bookshelf} src={printer} alt="bookshelf" /> */}
    </div>
  );
};

export default Office;
