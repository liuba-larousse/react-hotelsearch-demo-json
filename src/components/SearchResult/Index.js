import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  root: {
    minWidth: 650,
    width: "100%",
    maxWidth: 1020,
    height: 250,
    marginTop: 50
  },
  actionArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  media: {
    width: "50%",
    maxWidth: 300,
    minHeight: 250
  },
  top: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px"
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  icon: {
    color: "#f44336"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: 500
  }
});

export default function SearchResult({
  src,
  details,
  title,
  rating,
  reviews,
  price
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          image={src}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <div className={classes.top}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {details}
            </Typography>
          </div>
          <div className={classes.bottom}>
            <Typography variant="h6" component="p">
              <StarIcon className={classes.icon} /> {rating} ({reviews} reviews)
            </Typography>
            <Typography variant="h6" component="p">
              <strong> {price} </strong> /night
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
