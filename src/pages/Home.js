import React from "react";
import Grid from "@material-ui/core/Grid";
import OfficeCard from "./../components/OfficeCard";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import theme from "./../themes/theme";

const useStyles = makeStyles({
  root: {
    margin: "2% 5%",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
});

const Home = () => {
  const classes = useStyles();

  const offices = [
    { name: "Office 001", isManager: true },
    { name: "Office 002", isManager: false },
    { name: "Office 003", isManager: false },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {offices.map((office) => (
          <Grid item xs>
            <OfficeCard office={office}></OfficeCard>
          </Grid>
        ))}
      </Grid>
      <Fab
        aria-label="add"
        color="primary"
        onClick={() => {
          alert("add something");
        }}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
