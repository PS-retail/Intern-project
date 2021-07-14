import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import MenuIcon from "@material-ui/icons/Menu";
import { Link} from "react-router-dom";

import { useHttpClient } from "../general/http-hook";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const openMenuHandler = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const getHandler = async () => {
    const data = await sendRequest(
      "https://api.chatengine.io/users/",
      "get"
    );
    console.log(data);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/chat" style={{ textDecoration: "none" }}>
        <MenuItem>
          <IconButton aria-label="Chat" color="inherit">
            <ChatBubbleIcon />
          </IconButton>
          <p>Chat with us</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={getHandler}>
        <IconButton aria-label="Get Help" color="inherit">
          <HelpIcon />
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="Settings" color="inherit">
          <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="relative" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="BangOlufsen"
              height="25px"
              className={classes.image}
            />
            Bang & Olufsen
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button} />
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={openMenuHandler}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default Navbar;
