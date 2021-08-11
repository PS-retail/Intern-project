import React, { useState, useContext , Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Button,
  Typography,
} from "@material-ui/core";
import Toast from 'react-bootstrap/Toast';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import { Col, Row, Form  } from "react-bootstrap";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import SearchBar from "./searchBar";
import "./navbar.css";
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
  const [show, setShow] = useState(false);
  const [showsearch, setShowsearch] = useState(false);
    const [showglasses, setShowglasses] = useState(false);


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

     <nav class="w-screen fixed bg-white z-50 flex items-center justify-between flex-wrap bg-teal " >
      <div class="flex items-center flex-no-shrink text-white mr-6 ml-6 " >
      <Button class = "text-3xl bg-transparent cursor-pointer  py-2 px-4 border-none  " delay={3000} autohide onClick={() => setShow(true)}>≡</Button>
       <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
      <Button class = "text-xl bg-transparent cursor-pointer  border-none  " onClick={() => setShow(false)}>X</Button>
</Toast>
      </div>

    <div class="text-center lg:flex-grow ">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          <img src="https://www.luxussound.com/img/logos/logo-bangolufsen.png" width="120" />
        </a>
      </div>
      <div class="inline-block text-sm px-4 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal hover:bg-white  ">
          {!auth.isLoggedIn && (
            <Link to={"/login"} style={{ textDecoration: "none" }}>
                <Button class = "text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  ">
                👤
                </Button>
            </Link>
          )}
       <Button onClick={() => setShowsearch(true)}>🔍</Button>
       <Button onClick={() => setShowglasses(true)}>🕶</Button>
       <Toast onClose={() => setShowsearch(false)} show={showsearch} delay={3000} autohide>
       <SearchBar/>
       </Toast>


   </div>

 </nav>
<br/><br/>


 <Toast onClose={() => setShow(false)} show={show} delay={7000} autohide >

  <Toast.Body class = "bg-black w-screen h-screen z-50 ">
  <br /><br /><br/>
   <Link to={"/products"} style={{ textDecoration: "none" }}>
       <button class = "text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  ">
       All Products
       </button>
   </Link>
   <br/>
   <Link to={"/stories"} style={{ textDecoration: "none" }}>
       <button class = "text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  ">
       Stories
       </button>
   </Link>
   <br/>
   <Link to={"/customer"} style={{ textDecoration: "none" }}>
       <button class = "text-3xl bg-transparent text-white cursor-pointer  py-2 px-4 border-none  ">
       Customer Service
       </button>
          <br />
   </Link>
   </Toast.Body>
 </Toast>




  <Toast onClose={() => setShowglasses(false)} show={showglasses} delay={3000} >
  <div class="w-screen h-screen fixed bg-blue-400 bg-opacity-50 z-0   " >

  </div>
  </Toast>





    </>
  );
};
export default Navbar;
