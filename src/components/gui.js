import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MyCardMedia from './myCardMedia';
import MyCardContent from './myCardContent.js';
import MyCardActions from './myCardActions.js';

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
  }
});

function GUI(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <MyCardMedia />
      <MyCardContent />
      <MyCardActions />
    </Card>

  );
}

GUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GUI);
