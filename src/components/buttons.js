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
      <Button variant="contained" className={classes.button} onClick={handleClick}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={handleClick}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button} onClick={handleClick}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button} onClick={handleClick}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
