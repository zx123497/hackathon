import React from 'react'
import ChatRoom from '../components/ChatRoom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    office:{
        position:"relative",
        "& .chatroom":{
            position:"absolute",
            bottom:"calc(-100vh + 64px)",
            right:0,
        }
    }
  }));

const Office=(props)=> {
    const classes = useStyles();
    return (
        <div className={classes.office}>
            <div className="chatroom">
            <ChatRoom />
            </div>
            
        </div>
    )
}

export default Office
