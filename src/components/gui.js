import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MyCardMedia from './myCardMedia';
import MyCardContent from './myCardContent.js';
import MyCardActions from './myCardActions.js';
//import DynamicClassName from './dynamicClassName.js';

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

class GUI extends React.Component {

  handleButtonOneClick = () => {
    this.props.handleButtonOneClick();
  }

  handleButtonTwoClick = () => {
    this.props.handleButtonTwoClick();
  }

  handleButtonThreeClick = () => {
    this.props.handleButtonThreeClick();
  }

  handleButtonFourClick = () => {
    this.props.handleButtonFourClick();
  }


  render() {
    const { classes } = this.props;
    const blockOneText = this.props.blockOneText;
    const blockTwoText = this.props.blockTwoText;
    const blockThreeText = this.props.blockThreeText;

    return (
      <Card className={classes.card}>
        <MyCardMedia />
        <MyCardContent
          blockOneText = {blockOneText}
          blockTwoText = {blockTwoText}
          blockThreeText = {blockThreeText}
          />
        <MyCardActions
          handleButtonOneClick = {this.handleButtonOneClick}
          handleButtonTwoClick = {this.handleButtonTwoClick}
          handleButtonThreeClick = {this.handleButtonThreeClick}
          handleButtonFourClick = {this.handleButtonFourClick}
          />
      </Card>
    );
  }
}


GUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GUI);
