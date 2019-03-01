import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './buttons.js';

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    marginTop: theme.spacing.unit * 4,
    maxWidth: 375,
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
  height: 300,
  }
});

function GUI(props) {
  const { classes } = props;

  function handleClick(e) {
  e.preventDefault();
  Typography.setState = {text: 'test'};
  console.log('The link was clicked.');
  }

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image= {require ('../thumbnails/map0.png')}
          title="image0"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Map
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </Typography>
        </CardContent>
      <CardActions>
        <ContainedButtons  onClick={handleClick} />
      </CardActions>
    </Card>

  );
}

GUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GUI);
