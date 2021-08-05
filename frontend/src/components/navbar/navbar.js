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

    <nav class="w-screen fixed bg-white z-50 flex items-center justify-between flex-wrap bg-teal " >
  <div class="flex items-center flex-no-shrink text-white mr-6" >
<span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
<div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
  <div x-data="{ open: false }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
      <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</a>
      <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      <a class="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Blog</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Portfolio</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">About</a>
      <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Contact</a>
      <div @click.away="open = false" class="relative" x-data="{ open: false }">
        <button @click="open = !open" class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>Dropdown</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
          <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

  </div>
  <div class="text-center lg:flex-grow ">
    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">

      <img src="https://www.luxussound.com/img/logos/logo-bangolufsen.png" width="120" />
    </a>
  </div>
  <div>
    <a href="#" class="inline-block text-sm px-4 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white  ">
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
    </a>

  </div>
</nav>



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
            to={"/stories"}
          >
            <Headers>Stories</Headers>
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
