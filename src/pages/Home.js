import React from "react";
import Grid from "@material-ui/core/Grid";
import OfficeCard from "./../components/OfficeCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "2% 5%",
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
    </div>
  );
};

export default Home;
