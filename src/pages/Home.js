import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import OfficeCard from "./../components/OfficeCard";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import theme from "./../themes/theme";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import Input from "../components/Input/Input";
import Button from "@material-ui/core/Button";
import OfficeService from "../services/OfficeService";
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
  const cur_id = 1;
  const [title, setTitle] = useState("");
  const [offices, setOffices] = useState([]);
  useEffect(() => {
    OfficeService.getOfficeList().then((res) => {
      console.log(res);
      let temp = [];
      res.map((row) => {
        temp.push(createRow(row));
      });
      setOffices(temp);
    });
  }, []);
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
  const createRow = (row) => {
    if (row.userId === cur_id) {
      return { id: row.officeId, name: row.officeName, isManager: true };
    } else {
      return { id: row.officeId, name: row.officeName, isManager: false };
    }
  };
  const handleAddRoom = () => {
    const title_add = modalOpenState.title;
    const new_room = { name: title_add, isManager: true };
    const newArr = offices.concat(new_room);

    setOffices(newArr);
  };
  const [modalOpenState, setModalOpenState] = useState({
    open: false,
    title: "",
  });
  const handleOpen = () => {
    setModalOpenState({ ...modalOpenState, open: true });
  };
  const handleModalClose = () => {
    setModalOpenState({ open: false, title: "" });
  };
  const handleTitleChanged = async (id, value) => {
    setModalOpenState({ ...modalOpenState, title: value });
  };
  return (
    <div className={classes.root}>
      <Box display="flex" flexWrap="wrap" spacing={1}>
        {offices.map((office) => (
          // minWidth有點問題
          <Box p={1} pt={2} minWidth={1 / 5}>
            <OfficeCard
              component={Link}
              to={`/office/:${office.id}`}
              office={office}
            ></OfficeCard>
          </Box>
        ))}
      </Box>
      <Fab
        aria-label="add"
        color="primary"
        onClick={handleOpen}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <Modal
        className={classes.Modal}
        opened={modalOpenState.open}
        handleClose={handleModalClose}
      >
        <h3 className="title">新增辦公室</h3>
        <Input
          className="inputTitle"
          key="message"
          id="message"
          elementType="input"
          elementConfig={{
            type: "text",
            placeholder: "輸入房間名字",
          }}
          value={modalOpenState.title}
          onChange={handleTitleChanged}
        />
        <Button onClick={handleAddRoom}>新增</Button>
      </Modal>
    </div>
  );
};

export default Home;
