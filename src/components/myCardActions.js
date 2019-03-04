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

  render() {
    return (
      <CardActions>
        <ContainedButtons
          handleButtonOneClick = {this.handleButtonOneClick}
          handleButtonTwoClick = {this.handleButtonTwoClick}/>
      </CardActions>
    );
  }
}





export default withStyles(styles)(MyCardActions);
