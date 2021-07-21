import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "./styles";

const Product = (props) => {
  const classes = useStyles();
  const [iconFavorite, setIconFavorite] = useState(props.product.favorite);

  const onClickHandler = () => {
    setIconFavorite((prevState) => !prevState);
  };
  return (
    <Card className={classes.root}>
      <Link to={`/${props.product.id}`}>
        <CardMedia className={classes.media} image={props.product.image} />
        <CardContent
          style={{ paperContainer: { backgroundImage: `url(props.image)` } }}
        >
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {props.product.name}
            </Typography>
            <br />
            <Typography variant="h6">{props.product.description}</Typography>
          </div>
        </CardContent>
      </Link>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Favorites"
          style={iconFavorite ? { color: "red" } : { color: "grey" }}
          onClick={onClickHandler}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
