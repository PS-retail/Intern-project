import React, { useState } from "react";
import { useHistory } from "react-router";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/Menu";
import BlockIcon from "@material-ui/icons/Block";

import { useHttpClient } from "../general/http-hook";

const MeetingMenu = ({ id }) => {
  const [AnchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const { sendRequest } = useHttpClient();

  const isMenuOpen = Boolean(AnchorEl);

  const handleEdit = () => {
    history.push(`/edit/${id}`)
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
  }

  const meetingMenuId = "primary-meeting-menu";

  const openMenuHandler = (event) => setAnchorEl(event.currentTarget);

  const cancelHandler = async (event) => {
    event.preventDefault();
    try {
        await sendRequest({
        url: `http://localhost:5000/api/meetings/${id}`,
        method: "delete",
        data: null,
        headers: null,
      });
    } catch (err) {
      console.log(err);
    }
    setAnchorEl(null);
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
      <MenuItem onClick={cancelHandler}>
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
