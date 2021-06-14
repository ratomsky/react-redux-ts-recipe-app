import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import BookmarkSharpIcon from "@material-ui/icons/BookmarkSharp";
//Style
import { CardWrapper, ImageStyled } from "./RecipeCard.style";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
  },
  image: {
    width: 200,
    height: 200,
  },
  img: {},
}));

export function RecipeCard({ img, title }) {
  const [addButton, setAddButton] = useState(false);
  const classes = useStyles();

  return (
    <CardWrapper>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item style={{ margin: "auto" }}>
            <ButtonBase
              className={classes.image}
              style={{ overflow: "hidden" }}
            >
              <ImageStyled
                alt="complex"
                src="https://www.edamam.com/web-img/480/480000e79dbdd4648c4acd65630ff654.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid>
                <Box>
                  <Chip
                    variant="outlined"
                    size="small"
                    label={"Italian"}
                    style={{ margin: "5px" }}
                  />
                  <Chip
                    variant="outlined"
                    size="small"
                    label={"Lunch/Dinner"}
                    style={{ margin: "5px" }}
                  />
                  <Chip
                    variant="outlined"
                    size="small"
                    label={"Main course"}
                    style={{ margin: "5px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  Standard license
                </Typography>
                <Box style={{ marginBottom: "10px" }}>
                  <Tooltip title="ingredients">
                    <Typography noWrap component="span">
                      <i class="fas fa-carrot"></i>
                      12
                    </Typography>
                  </Tooltip>
                  <Tooltip title="portions">
                    <Typography noWrap component="span">
                      <RestaurantIcon fontSize="small" />5
                    </Typography>
                  </Tooltip>
                  <Tooltip title="calories">
                    <Typography noWrap component="span">
                      <WhatshotIcon fontSize="small" />
                      1000
                    </Typography>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setAddButton(true);
                  }}
                >
                  Add
                  <BookmarkSharpIcon
                    fontSize="small"
                    style={
                      addButton ? { color: "yellowgreen" } : { color: "black" }
                    }
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </CardWrapper>
  );
}
