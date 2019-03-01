import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
  }
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button} onClick={handleClick}>
        ButtonOne
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
        ButtonTwo
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
        ButtonThree
      </Button>
      <Button variant="contained" className={classes.button} onClick={handleClick}>
        ButtonFour
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
