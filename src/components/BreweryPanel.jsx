/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid, Paper, Typography, Box, Button, IconButton, Link,
} from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles(() => ({
  heading: {
    marginBottom: '5px',
  },
  icon: {
    marginRight: '10px',
  },
  est: {
    fontWeight: 700,
  },
  imgContainer: {
    minHeight: '150px',
  },
}));

const BreweryPanel = (props) => {
  const classes = useStyles();

  const { data } = props;
  const {
    name,
    description,
    logo_url,
    street_address,
    city,
    province,
    social1,
    social2,
    social3,
    website,
    phone,
    postal_code,
    latitude, longitude,
    established,
  } = data;

  return (
    <Grid item md={3} xs={12}>
      <Paper variant="outlined" style={{ height: '100%' }}>
        <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
          <Box display="flex" flexDirection="row" justifyContent="center" mt={3} className={classes.imgContainer} alignItems="center">
            <Box>
              <img src={logo_url} alt={name} width="150px" />
            </Box>
          </Box>
          <Box flexGrow={1} p={3}>
            <Typography variant="h5" className={classes.heading}>{name}</Typography>
            <Typography align="justify" variant="body1">{description}</Typography>
            <Typography align="justify" variant="caption" className={classes.est}>
              Est.
              {' '}
              {established}
            </Typography>
            <Box mt={3}>
              <Box display="flex" alignContent="center">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <HomeIcon className={classes.icon} />
                </Box>
                <Box>
                  <Typography variant="body2">
                    {street_address}
                  </Typography>
                  <Typography variant="body2">
                    {city}
                    ,
                    {' '}
                    {province}
                  </Typography>
                  <Typography variant="body2">
                    {postal_code}
                  </Typography>
                </Box>
              </Box>

            </Box>
            <Box mt={1}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
              }}
              >
                <PhoneIcon className={classes.icon} />
                <Typography variant="body2">
                  {phone}
                </Typography>
              </div>
            </Box>
            <Box mt={1}>
              <Link
                color="secondary"
                href={`https://www.google.com/maps?q=${longitude},${latitude}`}
                target="empty"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <RoomIcon className={classes.icon} />
                {latitude}
                ,
                {' '}
                {longitude}
              </Link>
            </Box>
          </Box>
          <Box p={3}>
            <Box display="flex" flexDirection="row" mb={1} justifyContent="center">
              {social1 ? (
                <IconButton color="secondary" href={social1} target="empty">
                  <TwitterIcon />
                </IconButton>
              ) : null }
              {social2 ? (
                <IconButton color="secondary" href={social2} target="empty">
                  <InstagramIcon />
                </IconButton>
              ) : null }
              {social3 ? (
                <IconButton color="secondary" href={social3} target="empty">
                  <FacebookIcon />
                </IconButton>
              ) : null }
            </Box>
            <Button fullWidth variant="outlined" color="secondary" href={website} target="empty">More</Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

BreweryPanel.propTypes = {
  data: PropTypes.instanceOf(Object),
};
BreweryPanel.defaultProps = {
  data: {},
};
export default BreweryPanel;
