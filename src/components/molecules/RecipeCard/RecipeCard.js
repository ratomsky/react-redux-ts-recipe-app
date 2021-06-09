import React from "react";
//Components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//Styles
import { Wrapper } from "./RecipeCard.style";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const RecipeCard = ({ img, name }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography noWrap>
            text texttex ttexttex ttexttextt exttextte xttext text texttex
            ttexttex ttexttextt exttextte xttexttext texttex ttexttex ttexttextt
            exttextte xttexttext texttex ttexttex ttexttextt exttextte
            xttexttext texttex ttexttex ttexttextt exttextte xttext
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
