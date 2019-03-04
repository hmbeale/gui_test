import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class ContainedButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.handleClick}
        >
          ButtonOne
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleClick}
        >
          ButtonTwo
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleClick}
        >
          ButtonThree
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={this.handleClick}
        >
          ButtonFour
        </Button>
      </div>
    );
  }
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
