import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import Container from "@material-ui/core/Container";
import ChatRoom from "./../components/ChatRoom";
import theme from "./../themes/theme";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
  bookshelf: {
    // maxWidth: "300px",
    maxWidth: "50%",
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
      welcome to the office.
    </div>
  );
};

export default Office;
