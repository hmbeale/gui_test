import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContainedButtons from './containedButtons.js';
import CardActions from '@material-ui/core/CardActions';

const styles = theme => ({
  media: {
  height: 300,
  }
});

class MyCardActions extends React.Component {

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
    return (
      <CardActions>
        <ContainedButtons
          handleButtonOneClick = {this.handleButtonOneClick}
          handleButtonTwoClick = {this.handleButtonTwoClick}
          handleButtonThreeClick = {this.handleButtonThreeClick}
          handleButtonFourClick = {this.handleButtonFourClick}
          />
      </CardActions>
    );
  }
}





export default withStyles(styles)(MyCardActions);
