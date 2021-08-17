import React, { useState, useContext, Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Typography,
} from "@material-ui/core";
import { useRef, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import Modal from "react-bootstrap/Modal";
import { ToastContainer } from "react-toastify";
import ToastHeader from "react-bootstrap/ToastHeader";
import ToastBody from "react-bootstrap/ToastBody";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
import { Col, Row, Form } from "react-bootstrap";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import SearchIcon from "@material-ui/icons/Search";
import AccessibilityNewRoundedIcon from "@material-ui/icons/AccessibilityNewRounded";
//import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
//import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import StopIcon from "@material-ui/icons/Stop";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import SearchBar from "./searchBar";
import "./navbar.css";
import useStyles from "./styles";
import { AuthContext } from "../general/auth-context";
import Card from "react-bootstrap/Card";
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
  const [show, setShow] = useState(false);
  const [showsearch, setShowsearch] = useState(false);
  const [showglasses, setShowglasses] = useState(false);

  const [showBlueglasses, setBlueglasses] = useState(false);

  const [showGreenglasses, setGreenglasses] = useState(false);

  const [showYellowglasses, setYellowglasses] = useState(false);
  const [showRedglasses, setRedglasses] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

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

  return (
    <>
      <nav class="w-screen fixed bg-white z-50 flex items-center justify-between flex-wrap bg-teal ">
        <div class="flex items-center flex-no-shrink text-white mr-6 ml-6 ">
          <Button
            class="text-3xl bg-transparent cursor-pointer  py-2 px-4 border-none  "
            delay={3000}
            autohide
            onClick={() => setShow(true)}
          >
            <MenuRoundedIcon fontSize="large"></MenuRoundedIcon>
          </Button>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Button
              class="text-xl bg-transparent cursor-pointer  border-none  "
              onClick={() => setShow(false)}
            >
              <ClearRoundedIcon fontSize="large"></ClearRoundedIcon>
            </Button>
          </Toast>
        </div>

        <div class="text-center lg:flex-grow ">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              <img
                src="https://www.luxussound.com/img/logos/logo-bangolufsen.png"
                width="190"
                height="50"
              />
            </a>
          </Link>
        </div>
        <div class="inline-block text-sm px-4 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white  ">
          {!auth.isLoggedIn && (
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button>
                <AccountBoxRoundedIcon fontSize="large"></AccountBoxRoundedIcon>
              </Button>
            </Link>
          )}

          <Button onClick={() => setShowsearch(true)}>
            <SearchIcon fontSize="large"></SearchIcon>
          </Button>

          <Button onClick={() => setShowglasses(true)}>
            <AccessibilityNewRoundedIcon fontSize="large"></AccessibilityNewRoundedIcon>
          </Button>
          <Toast
            onClose={() => setShowsearch(false)}
            show={showsearch}
            delay={3000}
            autohide
          >
            <SearchBar />
          </Toast>
          <Toast
            onClose={() => setShowglasses(false)}
            data-testid="toast"
            show={showglasses}
            delay={3000}
            class="z-1"
          >
            <Button
              class="text-xl bg-white cursor-pointer  border-none  "
              onClick={() =>
                setShowglasses(false) &
                setYellowglasses(false) &
                setRedglasses(false) &
                setGreenglasses(false) &
                setBlueglasses(false)
              }
            >
              <ClearRoundedIcon fontSize="large"></ClearRoundedIcon>
              {/* buttons for the different colours */}
            </Button>
            <Button onClick={() => setBlueglasses(true)}>
              <StopIcon fontSize="large" style={{ color: "blue" }}></StopIcon>
            </Button>
            <Button onClick={() => setGreenglasses(true)}>
              <StopIcon fontSize="large" style={{ color: "green" }}></StopIcon>
            </Button>
            <Button onClick={() => setYellowglasses(true)}>
              <StopIcon fontSize="large" style={{ color: "yellow" }}></StopIcon>
            </Button>
            <Button onClick={() => setRedglasses(true)}>
              <StopIcon fontSize="large" style={{ color: "red" }}></StopIcon>
            </Button>

            <Toast
              onClose={() => setBlueglasses(false)}
              data-testid="toast"
              show={showBlueglasses}
              delay={3000}
              class="z-1"
            >
              {/* <Button
                class="text-xl bg-white cursor-pointer  border-none  "
                onClick={() => setBlueglasses(false)}
              >
                🟦
              </Button> */}
            </Toast>
            <Toast
              onClose={() => setGreenglasses(false)}
              data-testid="toast"
              show={showGreenglasses}
              delay={3000}
              class="z-1"
            >
              {/* <Button
                class="text-xl bg-white cursor-pointer  border-none  "
                onClick={() => setGreenglasses(false)}
              >
                🟩
              </Button> */}
            </Toast>
            <Toast
              onClose={() => setYellowglasses(false)}
              data-testid="toast"
              show={showYellowglasses}
              delay={3000}
              class="z-1"
            >
              {/* <Button
                class="text-xl bg-white cursor-pointer  border-none  "
                onClick={() => setYellowglasses(false)}
              >
                🟨
              </Button> */}
            </Toast>
            <Toast
              onClose={() => setRedglasses(false)}
              data-testid="toast"
              show={showRedglasses}
              delay={3000}
              class="z-1"
            >
              {/* <Button
                class="text-xl bg-white cursor-pointer  border-none  "
                onClick={() => setRedglasses(false)}
              >
                🟥
              </Button> */}
            </Toast>
          </Toast>
        </div>
        <Toast onClose={() => setShow(false)} show={show} delay={7000} autohide>
          <Toast.Body class="bg-black w-screen h-screen z-50 ">
            <br />
            <br />
            <br />
            <Link to={"/products"} style={{ textDecoration: "none" }}>
              <button
                class="text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  "
                onClick={() => setShow(false)}
              >
                All Products
              </button>
            </Link>
            <br />
            <Link to={"/stories"} style={{ textDecoration: "none" }}>
              <button
                class="text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  "
                onClick={() => setShow(false)}
              >
                Stories
              </button>
            </Link>
            <br />
            <Link to={"/customer"} style={{ textDecoration: "none" }}>
              <button
                class="text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  "
                onClick={() => setShow(false)}
              >
                Customer Service
              </button>
              <br />
            </Link>
          </Toast.Body>
        </Toast>
      </nav>
      <br />
      <br />

      <Toast
        onClose={() => setBlueglasses(false)}
        data-testid="toast"
        show={showBlueglasses}
        delay={3000}
        class="z-1"
      >
        <div class="w-screen h-screen fixed bg-blue-400 bg-opacity-50 z-0  " />
      </Toast>
      <Toast
        onClose={() => setGreenglasses(false)}
        data-testid="toast"
        show={showGreenglasses}
        delay={3000}
        class="z-1"
      >
        <div class="w-screen h-screen fixed bg-green-400 bg-opacity-50 z-0  " />
      </Toast>
      <Toast
        onClose={() => setYellowglasses(false)}
        data-testid="toast"
        show={showYellowglasses}
        delay={3000}
        class="z-1"
      >
        <div class="w-screen h-screen fixed bg-yellow-400 bg-opacity-50 z-0  " />
      </Toast>
      <Toast
        onClose={() => setRedglasses(false)}
        data-testid="toast"
        show={showRedglasses}
        delay={3000}
        class="z-1"
      >
        <div class="w-screen h-screen fixed bg-red-400 bg-opacity-50 z-0  " />
      </Toast>
    </>
  );
};
export default Navbar;
