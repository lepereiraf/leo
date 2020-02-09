/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: '5px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderRadius: 10
  }
});

const Cards = ({ time, title, body }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant='outlined'>
      <CardContent>
        <Typography variant='h6' color='textSecondary'>
          {time}
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
