import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    fetchSerie: null,
    setSeries: ['data'],
    setSerieEdit: ['index', 'data'],
    addSerie: ['data'],
    editSerie: ['data', 'id'],
    deleteSerie: ['id']
  },
  {
    prefix: 'SERIES/'
  }
);

const {
  fetchSerie,
  setSeries,
  setSerieEdit,
  addSerie,
  editSerie,
  deleteSerie
} = Creators;

const {
  FETCH_SERIE,
  SET_SERIES,
  SET_SERIE_EDIT,
  ADD_SERIE,
  EDIT_SERIE,
  DELETE_SERIE
} = Types;

export {
  fetchSerie,
  setSeries,
  setSerieEdit,
  addSerie,
  editSerie,
  deleteSerie,
  FETCH_SERIE,
  SET_SERIES,
  SET_SERIE_EDIT,
  ADD_SERIE,
  EDIT_SERIE,
  DELETE_SERIE
};
