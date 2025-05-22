import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from '@mui/icons-material/Translate';
import { switchLocale } from "../../appSlice";

const LocaleSwitcher = () => {
  const dispatch = useDispatch()
  const [localeOptions] = useState([
    {
      locale: "en",
      label: "English",
      direction: 'ltr',
    },
    {
      locale: "da",
      label: "دری",
      direction: 'rtl',
    },
  ]);
  
  const selectedLocale = useSelector((state) => state.app.defaultAppLocale)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Fix: pass the actual locale item on click
  const handleSelect = async (item) => {
    // console.log('asdf')
    dispatch(switchLocale(item))
    handleClose();
    console.log('item', item)
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={ <TranslateIcon/> }
      >
        {selectedLocale.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {localeOptions.map((item) => (
          <MenuItem key={item.locale} onClick={() => handleSelect(item)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LocaleSwitcher;
