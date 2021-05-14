import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import {
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Navbar: {
    backgroundColor: theme.palette.background.paper,
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  Brandname: {
    flexGrow: 1,
    display: "flex",

    alignItems: "center",
    margin: 8,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.Navbar}>
      <Grid display="inline" container justify="flex-start">
        <Grid item className={classes.Brandname}>
          <Typography className={classes.middle}>MyRemoteOffice</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <Avatar src="" />
          </IconButton>
        </Grid>
        <Grid item className={classes.middle}>
          <Typography className={classes.middle}>Hello, User</Typography>
        </Grid>
        <Grid item className={classes.middle}>
          <Button variant="outlined" color="primary">
            登出
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
