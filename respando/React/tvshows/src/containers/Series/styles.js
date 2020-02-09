import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  actions: {
    margin: theme.spacing(1),
    width: '35px',
    height: '30px'
  },
  appForm: {
    flexDirection: 'column',
    minWidth: '70vh'
  },
  appFormItem: {
    margin: theme.spacing(2),
    minWidth: '65vh',
    display: 'block',
    boxizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #898989',
    padding: '10px 15px',
    marginBottom: '10px',
    fontSize: '14px'
  },
  app: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px'
  },
  buttonForm: {
    margin: theme.spacing(2)
  },
  labelForm: {
    margin: theme.spacing(2),
    minWidth: '65vh',
    textAlign: 'left',
    display: 'block',
    marginTop: '20px',
    color: '#000',
    fontSize: '14px',
    fontWeight: '200'
  },
  pForm: {
    margin: theme.spacing(2),
    minWidth: '65vh',
    color: '#bf1650'
  }
}));

export default useStyles;
