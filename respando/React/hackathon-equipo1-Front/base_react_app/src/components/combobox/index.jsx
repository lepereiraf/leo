/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(data) {
  const offices = data;

  return (
    <Autocomplete
      id='combo-box-demo'
      options={data}
      getOptionLabel={option => option.title}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label='Combo box' variant='outlined' fullWidth />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
