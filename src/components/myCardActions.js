import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContainedButtons from './containedButtons.js';
import CardActions from '@material-ui/core/CardActions';

const styles = theme => ({
  media: {
  height: 300,
  }
});

function MyCardActions(props) {

  return (
  <CardActions>
    <ContainedButtons />
  </CardActions>

  );
}

export default withStyles(styles)(MyCardActions);
