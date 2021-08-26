import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function From() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="To"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="From"
          defaultValue=""
          variant="outlined"
        />
      </div>
    </form>
  );
}

