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
import { useRef, useEffect } from "react";
import Toast from 'react-bootstrap/Toast';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer } from 'react-toastify';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
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
import Card from 'react-bootstrap/Card';
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


  function useOutsideAlerter(ref) {
     useEffect(() => {
       /**
        * Close toast if clicked on outside of element
        */
       function handleClickOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
           setShow(false);
         }
       }
       // Bind the event listener
       document.addEventListener("mousedown", handleClickOutside);
       return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
       };
     }, [ref]);
   }

   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef);


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
<br/>
       <Toast onClose={() => setShowglasses(false)} data-testid="toast" show={showglasses} delay={3000} class = "z-1">

               <Button class = "text-xl bg-white cursor-pointer  border-none  " onClick={() => setShowglasses(false) & setYellowglasses(false) & setRedglasses(false) & setGreenglasses(false) & setBlueglasses(false)}>NoGlasses</Button>
             <Button onClick={() => setBlueglasses(true)}>Blue</Button>
             <Button onClick={() => setGreenglasses(true)}>Green</Button>
             <Button onClick={() => setYellowglasses(true)}>Yellow</Button>
             <Button onClick={() => setRedglasses(true)}>Red</Button>

             <Toast onClose={() => setBlueglasses(false)} data-testid="toast" show={showBlueglasses} delay={3000} class = "z-1">
                     <Button class = "text-xl bg-white cursor-pointer  border-none  " onClick={() => setBlueglasses(false)}>NoBlue</Button>
             </Toast>
             <Toast onClose={() => setGreenglasses(false)} data-testid="toast" show={showGreenglasses} delay={3000} class = "z-1">
                     <Button class = "text-xl bg-white cursor-pointer  border-none  " onClick={() => setGreenglasses(false)}>NoGreen</Button>
             </Toast>
             <Toast onClose={() => setYellowglasses(false)} data-testid="toast" show={showYellowglasses} delay={3000} class = "z-1">
                     <Button class = "text-xl bg-white cursor-pointer  border-none  " onClick={() => setYellowglasses(false)}>NoYellow</Button>
             </Toast>
             <Toast onClose={() => setRedglasses(false)} data-testid="toast" show={showRedglasses} delay={3000} class = "z-1">
                     <Button class = "text-xl bg-white cursor-pointer  border-none  " onClick={() => setRedglasses(false)}>NoRed</Button>
             </Toast>
             </Toast>






   </div>
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


 </nav>
<br/><br/>
















  <Toast onClose={() => setBlueglasses(false)} data-testid="toast" show={showBlueglasses} delay={3000} class = "z-1">
          <div class="w-screen h-screen fixed bg-blue-400 bg-opacity-50 z-0  " />
  </Toast>
  <Toast onClose={() => setGreenglasses(false)} data-testid="toast" show={showGreenglasses} delay={3000} class = "z-1">
          <div class="w-screen h-screen fixed bg-green-400 bg-opacity-50 z-0  " />
  </Toast>
  <Toast onClose={() => setYellowglasses(false)} data-testid="toast" show={showYellowglasses} delay={3000} class = "z-1">
          <div class="w-screen h-screen fixed bg-yellow-400 bg-opacity-50 z-0  " />
  </Toast>
  <Toast onClose={() => setRedglasses(false)} data-testid="toast" show={showRedglasses} delay={3000} class = "z-1">
          <div class="w-screen h-screen fixed bg-red-400 bg-opacity-50 z-0  " />
  </Toast>

    </>
  );
};
export default Navbar;
