import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";
import { IconButton } from '@material-ui/core';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Navbar() {
  const classes = useStyles();

  return (
<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      
    </IconButton>
    <Typography variant="h6" color="inherit">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
  );
}
