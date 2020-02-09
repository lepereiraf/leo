import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Button,
  TableRow,
  TableCell,
  Grid,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  withStyles,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';

import useMount from '../../hooks/useMount';
import {
  fetchEvent,
  setEventEdit,
  editEvent,
  deleteEvent
} from '../../actions/events';
import { useActions } from '../../hooks';

import useStyles from './styles';
import ModalAdd from './ModalAdd';

const Settings = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { events, eventEdit } = useSelector(({ events }) => events);
  const { register, handleSubmit } = useForm();

  const { onEditEvent, onDeleteEvent } = useActions({
    onEditEvent: editEvent,
    onDeleteEvent: deleteEvent
  });

  const handleGetEvent = useCallback(element => dispatch(fetchEvent()), [
    dispatch
  ]);

  useMount(async () => {
    handleGetEvent();
  });

  const handleOpenModal = (user, index) => () => {
    dispatch(setEventEdit(index, user));
  };

  const handleClose = () => {
    dispatch(setEventEdit(-1, null));
  };

  const handleCloseModalAdd = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = ({ _description, _dates, _hours, _id_offices, id }) => {
    const items = {
      description: _description,
      dates: _dates,
      hours: _hours,
      id_offices: _id_offices
    };

    onEditEvent(items, id);
    handleClose();
  };

  const StyledTableCell = withStyles(() => ({
    head: {
      fontSize: 20
    }
  }))(TableCell);

  const dialogJSX = !!eventEdit.data && (
    <Dialog
      open={!!eventEdit.data}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      className={classes.app}
    >
      <DialogTitle id='alert-dialog-title'>Actualizar evento</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <form
            className={classes.appForm}
            onSubmit={handleSubmit(onSubmit)}
            ref={register}
          >
            <Grid item>
              <input
                type='hidden'
                name='id'
                value={eventEdit.data.id}
                ref={register}
              />
              <label className={classes.labelForm}>Descripción:</label>
              <input
                className={classes.appFormItem}
                name='description'
                label='Description'
                type='input'
                ref={register}
                defaultValue={eventEdit.data.description}
              />
            </Grid>
            <Grid item>
              <label className={classes.labelForm}>Fecha:</label>
              <input
                className={classes.appFormItem}
                name='dates'
                label='Dates'
                type='input'
                ref={register}
                defaultValue={eventEdit.data.release}
              />
            </Grid>
            <Grid item>
              <label className={classes.labelForm}>Hora:</label>
              <input
                className={classes.appFormItem}
                name='hours'
                label='Hora'
                type='input'
                ref={register}
                defaultValue={eventEdit.data.hours}
              />
            </Grid>
            <Grid item>
              <label className={classes.labelForm}>Id oficina:</label>
              <input
                className={classes.appFormItem}
                name='id_offices'
                label='Id Oficina'
                type='input'
                ref={register}
                defaultValue={eventEdit.data.id_offices}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.buttonForm}
                type='submit'
                color='secondary'
                variant='contained'
              >
                {'Actualizar'}
              </Button>
            </Grid>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

  const renderEventsList = (lista, index) => (
    <TableRow key={lista.id}>
      <TableCell align='left'>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Typography variant='h6'>{lista.description}</Typography>
            <Typography variant='subtitle2'>
              Hora de alarma: {lista.hours}
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align='right'>
        <Fab
          color='primary'
          aria-label='edit'
          className={classes.actions}
          onClick={handleOpenModal(lista, index)}
        >
          <EditIcon />
        </Fab>
        <Fab
          color='secondary'
          aria-label='delete'
          className={classes.actions}
          onClick={() => onDeleteEvent(lista.id)}
        >
          <DeleteIcon />
        </Fab>
      </TableCell>
    </TableRow>
  );

  return (
    <Container>
      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Total eventos: {events.length} - Agregar evento
                <Fab
                  color='secondary'
                  aria-label='delete'
                  className={classes.actions}
                  onClick={() => handleOpen()}
                >
                  <AddIcon />
                </Fab>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <ModalAdd open={open} handleClose={handleCloseModalAdd} />
          <TableBody>{events.map(renderEventsList)}</TableBody>
        </Table>
      </Paper>
      {dialogJSX}
    </Container>
  );
};

export default Settings;
