import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/Menu";
import BlockIcon from "@material-ui/icons/Block";
import { Link } from "react-router-dom";

const MeetingMenu = ({ editMenuOpen, setEditMenuOpen }) => {
  const [AnchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(AnchorEl);

  const handleEdit = () => {
    setEditMenuOpen();
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
  }

  const meetingMenuId = "primary-meeting-menu";

  const openMenuHandler = (event) => setAnchorEl(event.currentTarget);

  const cancelHandler = () => {
    console.log("Cancel");
  };

  const openMenu = (
    <Menu
      anchorEl={AnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={meetingMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleEdit}>
        <IconButton aria-label="Edit" color="inherit">
          <EditIcon />
        </IconButton>
        <p>{"Edit"}</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <IconButton aria-label="Cancel" color="inherit">
          <BlockIcon />
        </IconButton>
        <p>{"Cancel"}</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <IconButton aria-label="Menu" color="inherit" onClick={openMenuHandler}>
        <MenuIcon />
      </IconButton>
      {openMenu}
    </React.Fragment>
  );
};

export default MeetingMenu;
