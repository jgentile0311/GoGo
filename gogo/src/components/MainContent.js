import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import From from './From';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>GoGo</Typography>
      </div>

      <From />

    </main>
  );
}

export default MainContent;