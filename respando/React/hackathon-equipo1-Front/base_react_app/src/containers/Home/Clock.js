/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  clock: {
    marginTop: 120,
    fontFamily: 'Arial Black',
    fontSize: 200,
    letterSpacing: '1px'
  }
});

const Clock = props => {
  const classes = useStyles();

  const [time, setTime] = useState(new Date());
  const { offSet } = props;

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, [setTime]);

  return (
    <div>
      <Typography className={classes.clock} variant='h1' align='center'>
        {time.getHours() + offSet}:{time.getMinutes()}:{time.getSeconds()}
      </Typography>
    </div>
  );
};

export default Clock;
