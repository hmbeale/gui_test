import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  media: {
  height: 300,
  }
});

let hello = 'helloTho';

function MyCardContent(props) {

  return (
    <CardContent>
      {hello}
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
  );
}

MyCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCardContent);
