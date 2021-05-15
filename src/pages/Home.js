import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import OfficeCard from "./../components/OfficeCard";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import theme from "./../themes/theme";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "2% 5%",
    display: "flex",
    justifyContent: "center",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
});

const Home = () => {
  const classes = useStyles();
  const [offices, setOffices] = useState([
    { name: "Office 001", isManager: true },
    { name: "Office 002", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
    { name: "Office 003", isManager: false },
  ]);
  // const offices = [
  //   { name: "Office 001", isManager: true },
  //   { name: "Office 002", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  //   { name: "Office 003", isManager: false },
  // ];

  const handleAddRoom = () => {
    const new_room = { name: "Office 003", isManager: false };
    const newArr = offices.concat(new_room);
    setOffices(newArr);
  };

  return (
    <div className={classes.root}>
      <Box display="flex" flexWrap="wrap" spacing={1}>
        {offices.map((office) => (
          // minWidth有點問題
          <Box p={1} pt={2} minWidth={1 / 5}>
            <OfficeCard
              component={Link}
              to={"/office"}
              office={office}
            ></OfficeCard>
          </Box>
        ))}
      </Box>
      <Fab
        aria-label="add"
        color="primary"
        onClick={handleAddRoom}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
