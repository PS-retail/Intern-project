import React, { useState, useContext } from "react";
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
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import useStyles from "./styles";
import { AuthContext } from "../general/auth-context";

const Navbar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const auth = useContext(AuthContext);
  

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }
  const openMenuHandler = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const mobileMenuId = "primary-search-account-menu-mobile";


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
      <Link to={auth.isLoggedIn ? "/chat" : '/login'} style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton aria-label="Chat" color="inherit">
            <ChatBubbleIcon />
          </IconButton>
          <p>Chat with us</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton aria-label="Get Help" color="inherit">
          <HelpIcon />
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
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
