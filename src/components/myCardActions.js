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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <CardActions>
        <ContainedButtons handleClick = {this.handleClick}/>
      </CardActions>
    );
  }
}





export default withStyles(styles)(MyCardActions);
