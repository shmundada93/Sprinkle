import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function MovieCard(props) {
  const { classes, movieData } = props;

  return (
    <Card className={classes.card} style={{ margin: 8, width: '50%' }}>
      <CardContent>
        <Typography variant="title" component="h2">
          {movieData.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {movieData.genre.join(' | ')}
        </Typography>
      </CardContent>
    </Card>
  );
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movieData: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieCard);