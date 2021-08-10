import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from '@material-ui/core';

const ProvinceSelector = (props) => {
  const provinces = ['All', 'British Columbia', 'Alberta', 'Saskatchewan', 'Manitoba', 'Ontario', 'Quebec', 'Nova Scotia', 'PEI', 'Newfoundland', 'New Brunswick', 'Yukon', 'NWT', 'Nunavut'];
  const [selected, setSelected] = useState(0);
  const { onChange } = props;

  const buttonClicked = (index, province) => {
    setSelected(index);
    onChange(province);
  };

  const provinceComponents = provinces.map((province, index) => (
    <Grid item xs={6} md={2} key={province}>
      <Button
        fullWidth
        style={{ height: '100%' }}
        variant={selected === index ? 'contained' : 'outlined'}
        color="secondary"
        onClick={() => {
          buttonClicked(index, province);
        }}
      >
        {province}
      </Button>
    </Grid>
  ));

  return (
    <Grid container spacing={1} style={{ marginTop: '10px', padding: '10px' }}>
      { provinceComponents }
    </Grid>
  );
};

ProvinceSelector.propTypes = {
  onChange: PropTypes.func,
};
ProvinceSelector.defaultProps = {
  onChange: () => {},
};

export default ProvinceSelector;
