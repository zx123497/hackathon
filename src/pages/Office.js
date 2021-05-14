import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
  bookshelf: {
    // maxWidth: "300px",
    maxWidth: "50%",
  },
});

const Office = () => {
  const classes = useStyles();

  return (
    <Container width={1} height={1} bgcolor="grey.300" maxWidth="lg">
      <img className={classes.bookshelf} src={bookshelf} alt="bookshelf" />
      welcome to the office.
    </Container>
  );
};

export default Office;
