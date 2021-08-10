import React, { useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BreweryPanel from './BreweryPanel';
import ProvinceSelector from './ProvinceSelector';

const useStyles = makeStyles(() => ({
  root: {
    margin: '20px',
  },
}));

const BreweryList = (props) => {
  const { data } = props;
  const classes = useStyles();

  const [province, setProvince] = useState('All');

  const provinceChanged = (prov) => {
    setProvince(prov);
  };

  const filteredData = data.filter((brewery) => {
    if (province === 'All') {
      return true;
    }
    return brewery.province === province;
  });

  const breweryItems = filteredData
    .map((brewery) => {
      const { name } = brewery;
      return <BreweryPanel data={brewery} key={name} />;
    });

  return (
    <div className={classes.root}>
      <ProvinceSelector onChange={provinceChanged} />
      <Box py={2} pb={3}>
        <Typography variant="h4" align="center">{province}</Typography>
      </Box>
      <Grid container spacing={2}>
        {breweryItems}
      </Grid>
    </div>
  );
};

BreweryList.propTypes = {
  data: PropTypes.instanceOf(Array),
};

BreweryList.defaultProps = {
  data: [],
};

export default BreweryList;
