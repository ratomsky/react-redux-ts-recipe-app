import React from "react";
//Components
import { RecipeCard } from "../../molecules/RecipeCard/RecipeCard";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
//Style

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
  return (
    <Box padding={4}>
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid item xs={12}>
            <RecipeCard img={recipe.img} title={recipe.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
