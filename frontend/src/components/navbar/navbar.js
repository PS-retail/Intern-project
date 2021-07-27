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
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import SearchBar from "./searchBar";
import useStyles from "./styles";
import { AuthContext } from "../general/auth-context";

const Title = styled.div`
  ${tw`
  text-2xl
  font-bold
  text-black
`};
`;

const Headers = styled.div`
  ${tw`
  text-lg
  font-semibold
  text-black
`};
`;

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
        <Link to={"meeting"} style={{ textDecoration: "none" }}>
          <MenuItem onClick={handleMobileMenuClose}>
            <IconButton aria-label="Settings" color="inherit">
              <VideoCallIcon />
            </IconButton>
            <p>Arrange or View Videocall</p>
          </MenuItem>
        </Link>
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
      <AppBar
        position="relative"
        className={classes.appBar}
        color="inherit"
        style={{ textDecoration: "none" }}
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <Title>Bang & Olufsen</Title>
          </Typography>
          <div className={classes.grow} />
          <Typography
            style={{ textDecoration: "none" }}
            component={Link}
            to={"/products"}
          >
            <Headers>All Products</Headers>
          </Typography>
          <div className={classes.grow} />
          <Typography
            style={{ textDecoration: "none" }}
            component={Link}
            to={"/customer"}
          >
          <Headers>Customer Service</Headers>
          </Typography>
          <div className={classes.grow} />
          <SearchBar/>
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
                <Headers>{"Login"}</Headers>
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
