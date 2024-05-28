import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Translate from '../ReusableComponents/Translate';

const LanguageSelector = () => {
  const { t, changeLanguage, currentLanguage } = Translate();

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 120, marginBottom: 2 }}>
      <InputLabel id="language-select-label">{t('selectLanguage')}</InputLabel>
      <Select
        labelId="language-select-label"
        value={currentLanguage}
        onChange={handleLanguageChange}
        label={t('selectLanguage')}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="gr">Greek</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
