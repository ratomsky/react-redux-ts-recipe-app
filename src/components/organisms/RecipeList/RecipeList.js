import React from "react";
//Components
import { RecipeCard } from "../../molecules/RecipeCard/RecipeCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//Style
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: "20px",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const recipes = [
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
  {
    img: "https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg",
    name: "Chicken Liver Pâté",
  },
];

export const RecipeList = () => {
  const classes = useStyles();

  return (
    <Box padding={4}>
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={4}>
            <RecipeCard img={recipe.img} name={recipe.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
