import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Todo: {
    width: '100%',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '0.5rem',
    color: '#d0e300',
    fontSize: '1rem',
    lineHeight: '2.5rem',
    overflowX: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(208, 227, 0, 0.08)',
      cursor: 'pointer'
    },
    '&:hover div': {
      opacity: '1'
    }
  },
  icons: {
    width: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '1rem',
    float: 'right',
    transition: 'all 0.3s',
    opacity: '0'
  }
});
