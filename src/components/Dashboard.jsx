import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';

import Context from '../context';

// Custom Components
import BreweryList from './BreweryList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 20,
    flexGrow: 1,
    fontFamily: 'Oleo Script Swash Caps',
  },
  toolbar: {
    height: '100px',
  },
  subtitle: {
    fontWeight: 600,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { state } = useContext(Context);
  const { breweries } = state;

  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Box>
            <Typography display="inline" variant="h2" className={classes.title}>
              Brewhub
            </Typography>
            <Typography noWrap display="inline" variant="body1" className={classes.subtitle}>
              {' '}
              Find
              {' '}
              <em>your</em>
              {' '}
              brewery
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <section>
        <BreweryList data={breweries} />
      </section>
    </div>
  );
};

export default Dashboard;
