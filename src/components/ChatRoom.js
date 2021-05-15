import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useTheme from "@material-ui/core/styles/useTheme";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Input from "../components/Input/Input";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(0deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ChatRoom = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleMsgChanged = async (id, value) => {
    setMsg(value);
  };
  const handleSendMsg = () => {
    const newMsg = {
      msg: (
        <div style={{ display: "flex", alignItems: "start" }}>
          <Avatar
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
            aria-label="recipe"
            className={classes.avatar}
          ></Avatar>
          <Typography
            paragraph
            style={{
              backgroundColor: theme.palette.primary.light,
              width: "max-content",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            {msg}
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ color: theme.palette.text.disabled, fontSize: "12px" }}>
            AM 00:00
          </div>
        </div>
      ),
    };
    setMsg("");
    setMessages(messages.concat(newMsg));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Emily
          </Avatar>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={
          <div style={{ display: "flex" }}>
            <Input
              className="inputTitle"
              key="message"
              id="message"
              elementType="input"
              elementConfig={{
                type: "text",
                placeholder: "輸入訊息",
              }}
              value={msg}
              onChange={handleMsgChanged}
            />
            <IconButton
              onClick={handleSendMsg}
              color="primary"
              aria-label="傳送訊息"
            >
              <SendIcon />
            </IconButton>
          </div>
        }
      />

      <CardActions disableSpacing></CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {messages.map((row) => (
            <div>{row.msg}</div>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ChatRoom;
