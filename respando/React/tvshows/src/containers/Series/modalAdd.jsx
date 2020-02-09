import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Button
} from '@material-ui/core';

import { addSerie } from '../../actions/series';
import { useActions } from '../../hooks';

import useStyles from './styles';

const ModalAdd = ({ open, handleClose }) => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const { onAddSerie } = useActions({
    onAddSerie: addSerie
  });

  const onSubmit = ({ _name, _release }) => {
    const items = {
      name: _name,
      release: _release
    };

    onAddSerie(items);
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      open={open}
      className={classes.app}
    >
      <DialogTitle id='alert-dialog-title'>Agregar serie</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <form
            className={classes.appForm}
            onSubmit={handleSubmit(onSubmit)}
            ref={register}
          >
            <Grid item>
              <label className={classes.labelForm}>Name:</label>
              <input
                className={classes.appFormItem}
                name='_name'
                label='Name'
                type='input'
                ref={register}
              />
            </Grid>
            <Grid item>
              <label className={classes.labelForm}>Release:</label>
              <input
                className={classes.appFormItem}
                name='_release'
                label='Name'
                type='input'
                ref={register}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonForm}
                type='submit'
                color='secondary'
                variant='contained'
              >
                {'Agregar'}
              </Button>
            </Grid>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAdd;
