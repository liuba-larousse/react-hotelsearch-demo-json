import React from "react";
// import s from "./index.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    margin: 10,
    width: 345,
    minHeight: 325,
    transition:
      "transform 0.15s ease-in-out",
    "&:hover": {
      transform:
        "scale3d(1.05, 1.05, 1)",
      backgroundColor:
        "transparent !important"
    },
    media: {
      padding: 200
    }
  }
});

export default function RoomCard({
  title,
  src,
  price,
  details
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt="Property image"
        height="140"
        image={src}
        title="Property image"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
        >
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
        <Typography
          gutterBottom
          variant="h6"
          component="p"
        >
          {price} /night
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          color="primary"
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

// export default function Card({
//   src,
//   title,
//   desc,
//   price
// }) {
//   return (
//     <div className={s.container}>
//       <img src={src} alt="" />
//       <div className={s.info}>
//         <span className={s.title}>
//           {title}
//         </span>
//         <span className={s.desc}>
//           {desc}
//         </span>
//         <span className={s.price}>
//           {price}
//         </span>
//       </div>
//     </div>
//   );
// }
