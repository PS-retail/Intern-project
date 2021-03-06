import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: 10,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.imageSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" color="primary">
          Purchase
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={props.canvasMode}
        >
          View in drawing canvas
        </Button>
      </CardActions>
    </Card>
  );
}
