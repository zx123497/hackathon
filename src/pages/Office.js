import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import Container from "@material-ui/core/Container";
import ChatRoom from "./../components/ChatRoom";
import theme from "./../themes/theme";
import Modal from '../components/Modal/Modal'
const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
  bookshelf: {
    // maxWidth: "300px",
    maxWidth: "50%",
    "&:hover":{
        transform: "scale(1.05)",
        transition: "0.5s",
        cursor: "pointer"
    }
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

  const [modalOpenState, setModalOpenState] = useState({
    open: false,
});

const handleModalOpen = () => {
    setModalOpenState({ ...modalOpenState,open: true });
};
  const handleBookshelf = ()=>{
    handleModalOpen();
  }  

  const handleModalClose = () => {
    setModalOpenState({
        open: false,
        
    });
};

  return (
    <div className={classes.office}>
      <div className="chatroom">
        <ChatRoom />
      </div>
      <img className={classes.bookshelf} src={bookshelf} alt="bookshelf" onClick={handleBookshelf}/>
      welcome to the office.
      <Modal
                opened={modalOpenState.open}
                handleClose={handleModalClose}
            >
                <h3 className="title">~檔案櫃~</h3>
                
            </Modal>
    </div>
  );
};

export default Office;
