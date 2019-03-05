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

function MyCardContent(props) {

  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Map
      </Typography>
      <Typography component="p">
        {props.lineOneText}
      </Typography>
    </CardContent>
  );
}

MyCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyCardContent);
