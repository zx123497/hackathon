import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import bookshelf from "./../assets/images/book_hondana_syodana.png";
import background from "./../assets/images/background.png";
import timecard from "./../assets/images/timecard_machine.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
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
    height:"calc",
  
    
    "& .chatroom": {
      position: "fixed",
      bottom: theme.spacing(0),
      right: theme.spacing(0),
    },
    "& .background":{
      width:"120vw",
     
      position:"absolute",
      overflow: "auto",
      
    },
    "& .content":{
      
      position:"relative",
    },
  },
  Modal:{
    "& .title":{
        color:theme.palette.primary.main,
        margin:"auto",

    },
    "& .uploadBtn":{
        backgroundColor:theme.palette.primary.main,
        color:"#FFF"
    },
    "& .files":{
        margin:"2rem auto",
        backgroundColor:theme.palette.background.default,
        width:"30rem",
        height:"20rem", 
    }
  }
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
      
        

        
  
         
      
      
      <img className={classes.bookshelf} src={bookshelf} alt="bookshelf" onClick={handleBookshelf}/>
      <img className={classes.bookshelf} src={timecard} alt="bookshelf" onClick={handleBookshelf}/>
      <Modal
                className={classes.Modal}
                opened={modalOpenState.open}
                handleClose={handleModalClose}
            >
                <h3 className="title">~檔案櫃~</h3>
                <div className="files"></div>
                <Button className="uploadBtn">上傳檔案</Button>
            </Modal>
            

        
      
      <div className="chatroom">
        <ChatRoom />
      </div>
    </div>
  );
};

export default Office;
