import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const OfficeCard = (props) => {
  const classes = useStyles();

  const { id, name, isManager } = props.office;
  // if props isManager then render "Is Manager Tag"
  let managerTag = <></>;
  if (isManager) {
    managerTag = (
      <Typography variant="h6" component="h6" color="primary">
        Manager
      </Typography>
    );
  }

  return (
    <Card component={Link} to={`/office/${id}`} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://placekitten.com/g/200/300"
          title="Is this image title?"
        />
        <CardContent>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </Box>
            <Box>{managerTag}</Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OfficeCard;
