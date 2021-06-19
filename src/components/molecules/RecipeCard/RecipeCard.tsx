import { useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import BookmarkSharpIcon from '@material-ui/icons/BookmarkSharp';
//Style
import { CardWrapper, ImageStyled } from './RecipeCard.style';
//Types
import { Props } from './RecipeCard.type';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 200,
    height: 200,
  },
}));

export const RecipeCard: FC<Props> = ({ img, title }: Props) => {
  const [addButton, setAddButton] = useState(false);
  const classes = useStyles();

  return (
    <CardWrapper style={{ fontFamily: 'Raleway' }}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item style={{ margin: 'auto' }}>
            <ButtonBase className={classes.image} style={{ overflow: 'hidden' }}>
              <ImageStyled alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid>
                <Box>
                  <Chip variant="outlined" size="small" label={'Italian'} style={{ margin: '5px' }} />
                  <Chip variant="outlined" size="small" label={'Lunch/Dinner'} style={{ margin: '5px' }} />
                  <Chip variant="outlined" size="small" label={'Main course'} style={{ margin: '5px' }} />
                </Box>
              </Grid>
              <Grid item xs>
                <p className="title">{title}</p>
                <Box
                  style={{
                    marginBottom: '10px',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div className="cardInfoWrapper">
                    <Tooltip title="ingredients">
                      <div className="cardInfo">
                        <i className="fas fa-carrot"></i>
                        12
                      </div>
                    </Tooltip>
                    <Tooltip title="portions">
                      <div className="cardInfo">
                        <RestaurantIcon fontSize="small" />5
                      </div>
                    </Tooltip>
                    <Tooltip title="calories">
                      <div className="cardInfo">
                        <WhatshotIcon fontSize="small" />
                        1000
                      </div>
                    </Tooltip>
                  </div>
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
                    style={addButton ? { color: 'yellowgreen' } : { color: 'black' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </CardWrapper>
  );
};
