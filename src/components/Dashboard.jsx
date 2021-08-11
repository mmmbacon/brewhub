import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
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
    marginLeft: 0,
    flexGrow: 1,
    fontFamily: 'Oleo Script Swash Caps',
    transform: 'rotate(-20deg)',
  },
  toolbar: {
    height: '120px',
    justifyContent: 'center',
  },
  subtitle: {
    fontWeight: 600,
  },
  subtitleContainer: {
    position: 'relative',
    top: '-20px',
    left: '80px',
  },
  socialPanel: {
    position: 'absolute',
    top: '5px',
    left: '5px',
  },
  socialText: {
    fontWeight: 600,
    paddingLeft: 5,
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
          <div
            className={classes.socialPanel}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <GitHubIcon color="secondary" />
            <Typography variant="body1" className={classes.socialText}>mmmbacon</Typography>
          </div>
          <Box style={{ transform: 'rotate(-3deg)', marginTop: '15px' }}>
            <Typography display="inline" variant="h2" className={classes.title}>
              Brewhub
            </Typography>
            <div className={classes.subtitleContainer}>
              <Typography noWrap display="inline" variant="body1" className={classes.subtitle}>

                {' '}
                Find
                {' '}
                <em>your</em>
                {' '}
                brewery
              </Typography>
            </div>
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
