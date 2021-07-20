import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import SearchBar from './searchBar';
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
  };
  const openMenuHandler = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const logoutHandler = (event) => {
    event.preventDefault();
    handleMobileMenuClose();
    auth.logout();
  };

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
      <Link to={"/chat"} style={{ textDecoration: "none" }}>
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton aria-label="Chat" color="inherit">
            <ChatBubbleIcon />
          </IconButton>
          <p>{"Chat with us"}</p>
        </MenuItem>
      </Link>
      {auth.isLoggedIn && (
        <MenuItem onClick={handleMobileMenuClose}>
          <IconButton aria-label="Settings" color="inherit">
            <VideoCallIcon />
          </IconButton>
          <p>Schedule a Video Call with a representative</p>
        </MenuItem>
      )}
      {auth.isLoggedIn && (
        <MenuItem onClick={logoutHandler}>
          <IconButton aria-label="Settings" color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      )}
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
          <SearchBar />
          <div className={classes.button} />
          {auth.isLoggedIn && (
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={openMenuHandler}
            >
              <MenuIcon />
            </IconButton>
          )}
          {!auth.isLoggedIn && (
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleMobileMenuClose}>
                <IconButton aria-label="Chat" color="inherit">
                  <MeetingRoomIcon />
                </IconButton>
                <p>{"Login"}</p>
              </MenuItem>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default Navbar;
