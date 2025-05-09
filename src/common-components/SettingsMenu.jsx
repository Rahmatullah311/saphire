import React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { Link } from "react-router";
import Divider from "@mui/material/Divider";

const MainMenu = ({ menuItems }) => (
  <MenuList>
    {menuItems ? (
      menuItems.map((item, index) =>
        item.type === "item" ? (
          <Link key={index} to={item.path}>
            <MenuItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </MenuItem>
          </Link>
        ) : (
          <>
            <Divider />
            <MenuItem>
              <ListItemText>{item.title}</ListItemText>
            </MenuItem>
          </>
        )
      )
    ) : (
      <Typography>Empty List</Typography>
    )}
  </MenuList>
);

const SettingsMenu = ({ menuItems }) => {
  return (
    <div>
      <MainMenu menuItems={menuItems} />
    </div>
  );
};

export default SettingsMenu;
