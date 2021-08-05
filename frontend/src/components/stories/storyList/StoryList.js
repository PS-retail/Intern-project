import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./storyList.css";
import storiesData from "../storiesData";
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import { Background, Parallax } from "react-parallax"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
const slideImages = [
  'https://images.ctfassets.net/8cd2csgvqd3m/6KBshSexIngc2pqhSFerUs/b1873823238aa5c74a4de6647add6db8/hero_ar_app_web.jpg',
  'https://images.ctfassets.net/8cd2csgvqd3m/3EL23prP6eVLesg8FxrGv6/4f8dfc2c714d2717b33c0f9bb8f6192a/connected_speakers_family.jpg',
  'https://www.scandinaviandesign.com/wp-content/uploads/2020/12/LS_A1_2ndGen_GreyMist_Moment_13-scaled-1.jpg',
];

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Container = styled.div`
  ${tw`
    m-10
    p-10
    bg-cover
    bg-no-repeat
    h-1/2
    max-h-96
    min-h-0
  `};
`;

const Slideing = styled.div`
  ${tw`
    w-1/2

  `};
`;

const Contents = styled.div`
  ${tw`
  m-auto
`};
`;

const Text = styled.div`
  ${tw`
  text-3xl
  p-10
  m-10
  text-white
  font-thin
  w-1/3
  text-left
  tracking-wider


`};
`;

const HeadText = styled.div`
  ${tw`
  text-3xl
tracking-wider
font-thin
  ml-60
  text-left


`};
`;

const Menu = styled.div`
  ${tw`
hover:underline
tracking-widest
font-thin
  text-center
text-gray-100

`};
`;

const Textsml = styled.div`
  ${tw`
    text-xs
    font-mono
    font-thin
    tracking-widest

    m-1
    text-white
`};
`;

const BlackText = styled.div`
  ${tw`
  text-3xl
tracking-wider
font-thin
  text-black

  text-left


`};
`;
const BlackTextsml = styled.div`
  ${tw`
  text-xs
  font-mono
  font-thin
  tracking-widest
  uppercase
  m-1
  text-gray-500

`};
`;


function StoryList() {

    return (
        // Header of the page
        <main >
          <HeadText>
            <BlackText>
              <p style={{ letterSpacing:'2px', fontSize:'50px'}}><br />Stories</p>
            </BlackText>
            <br />
            <BlackTextsml>
              Get inspired by our collection of narratives 
              <br />
            </BlackTextsml >
            <br />
          </HeadText>

        {/* Slideshow section */}
        <div style={{fontFamily:'Arial', letterSpacing:'2px'}}>
          <Slide easing="ease">

            {/* First slide */}
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`, backgroundPosition: '0% 50%'}}>
                <Text>
                  <Textsml>Augmented Reality</Textsml>
                  Not sure a device would fit your aesthetic? View it in your home today
                </Text>
              </div>
            </div>

            {/* Second slide */}
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`, backgroundPosition: '0% 60%'}}>
              <Text>
                <Textsml>Augmented Reality</Textsml>
                Many designs and colours to choose from
              </Text>
              </div>
            </div>

            {/* Third slide */}
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`, backgroundPosition: '10% 80%'}}>
              <Text>
                <Textsml>Augmented Reality</Textsml>
                For all the family members and occasions you could image
              </Text>
              </div>
            </div>
            
          </Slide>

        </div>

        <br />



<div class="flex text-gray-200 border-solid border-gray-100   text-center text-gray-100 p-2 " >

  <div class="text-gray-200 flex-1 text-gray-200  hover:underline  ">
  <Nav.Link href="#home" style = {{textDecoration: 'none', color:'gray', textTransform: 'uppercase', fontFamily:'Arial', letterSpacing:'2px',fontSize:'12px'}} > All</Nav.Link>
  </div>
  <div class="contents">
    <div class="flex-1 hover:underline flex-1" >
    <Nav.Link href="#home" style = {{textDecoration: 'none', color:'gray', textTransform: 'uppercase', fontFamily:'Arial', letterSpacing:'2px',fontSize:'12px'}}>{storiesData[0].name}</Nav.Link></div>
    <div class="flex-1 hover:underline flex-1" >
    <Nav.Link  href="#features" style = {{textDecoration: 'none', color:'gray', textTransform: 'uppercase', fontFamily:'Arial', letterSpacing:'2px',fontSize:'12px'}}>{storiesData[1].name}</Nav.Link>
    </div>
  </div>
  <div class="flex-1 hover:underline flex-1" >
  <Nav.Link href="#pricing" style = {{textDecoration: 'none', color:'gray', textTransform: 'uppercase', fontFamily:'Arial', letterSpacing:'2px',fontSize:'12px'}}>{storiesData[2].name}</Nav.Link>
  </div>
</div>





          <div class="grid grid-cols-10 grid-rows-10 ">

            <div class="col-start-0 col-span-6 row-start-0 row-span-2 imageblock hover:bg-gray-100">
                <Link style={{textDecoration: 'none' }} to= {{
                  pathname: "/story1",
                  state: {
                    id: storiesData[0].id,
                  },
                }}>
                  <Parallax bgImage= {storiesData[0].bgImage}>
                    <p>
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </p>
                  </Parallax>
                  <div>
                    <br />
                    <BlackTextsml >{storiesData[0].tagline}</BlackTextsml>
                    <BlackText >{storiesData[0].name}</BlackText>
                    <BlackTextsml >{storiesData[0].type}</BlackTextsml>
                  </div>
                </Link>
              </div>


            <div class="col-start-0 col-span-10 row-start-3 row-span 5 imageblock hover:bg-gray-100">
            <Link style={{textDecoration: 'none' }} to= {{
                  pathname: "/story1",
                  state: {
                    id: storiesData[1].id,
                  },
                }}>
                <Parallax bgImage= {storiesData[1].bgImage}>
                  <p>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  </p>
                </Parallax>
                <div>
                <br />
                  <BlackTextsml >{storiesData[1].tagline}</BlackTextsml>
                  <BlackText >{storiesData[1].name}</BlackText>
                  <BlackTextsml >{storiesData[1].type}</BlackTextsml>
                </div>

                  </Link>
              </div>

              <div class="col-start-0 col-span-4 row-start-0 row-span-2 imageblock hover:bg-gray-100 ">
              <Link style={{textDecoration: 'none' }} to= {{
                  pathname: "/story1",
                  state: {
                    id: storiesData[2].id,
                  },
                }}>

                  <Parallax bgImage= {storiesData[2].bgImage}>
                      <p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      </p>
                  </Parallax>
                  <div>
                    <br />
                    <BlackTextsml >{storiesData[2].tagline}</BlackTextsml>
                    <BlackText >{storiesData[2].name}</BlackText>
                    <BlackTextsml >{storiesData[2].type}</BlackTextsml>
                  </div>
                  </Link>
            </div>

        </div>




        </main>
    )
}


export default StoryList;
