import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./storyList.css";
import storiesData from "../storiesData";
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import { Background, Parallax } from "react-parallax"

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
const slideImages = [
  'https://www.wearable-technologies.com/wp-content/uploads/2018/10/Unity-ar-ads-1.png',
  'https://bevel.space/wp-content/uploads/2018/10/Bevel_Mobile_AR_header-crop.png',
  'https://cdn.shopify.com/s/files/1/1551/3581/files/AR_Room_Edited_02_large.jpg?v=1556729184',
  //'https://dynl.mktgcdn.com/p/4TZImYskTdK9zkIEkix4H3qhsKNgUVNMwDHszZPdUsI/619x412.jpg',
  //'https://images.ctfassets.net/8cd2csgvqd3m/6MtLXbfhaybi4ez8T534on/5f76e80aec5f10d13d0248aa50c9a8ec/XL.jpg',
  //'https://d3boo0lmrw6bqz.cloudfront.net/img/iws/iws_header.jpg'
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
  w-1/3
  text-left


`};
`;

const HeadText = styled.div`
  ${tw`
  text-3xl

  m-10
  text-left


`};
`;


const Menu = styled.div`
  ${tw`
hover:underline
  text-center
text-gray-100

`};
`;



const Textsml = styled.div`
  ${tw`
  text-base

  text-white
  text-left
`};
`;
const BlackText = styled.div`
  ${tw`
  text-3xl


  text-black

  text-left


`};
`;
const BlackTextsml = styled.div`
  ${tw`
  text-base
  text-gray-500

`};
`;



function StoryList() {
      let story0
      let story1
      let story2
      story0 = storiesData[0]
      story1 = storiesData[1]
      story2 = storiesData[2]

    return (
        <main><HeadText><BlackText >
        Stories</BlackText >
<BlackTextsml>
<br />Get inspired by our collection of narratives </BlackTextsml ></HeadText>
        <div>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <Text ><Textsml > Augmented Reality</Textsml>
                Not sure a device would fit your aesthetic? View it in your home today</Text>

              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <Text ><Textsml > Augmented Reality</Textsml>Many designs and colours to choose from</Text>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <Text ><Textsml > Augmented Reality</Textsml>For all the family members and occasions you could image</Text>

              </div>
            </div>
          </Slide>

        </div>

        <br />



<div class="flex text-gray-200 border-solid border-gray-100   text-center text-gray-100 " >

  <div class=" flex-1 text-gray-200  hover:underline text-gray-200 ">
  <Nav.Link href="#home"  > All</Nav.Link>
  </div>
  <div class="contents">
    <div class="flex-1 hover:underline flex-1" >
    <Nav.Link href="#home" >{story0.name}</Nav.Link></div>
    <div class="flex-1 hover:underline flex-1" >
    <Nav.Link  href="#features">{story1.name}</Nav.Link>
    </div>
  </div>
  <div class="flex-1 hover:underline flex-1" >
  <Nav.Link href="#pricing">{story2.name}</Nav.Link>
  </div>
</div>





          <div class="grid grid-cols-10 grid-rows-10 ">

            <div class="col-start-0 col-span-6 row-start-0 row-span-2 imageblock hover:bg-gray-100">
                <Link to={"/story1" } params= {1} style = {{textDecoration: 'none'}}>

                        <Parallax
                            bgImage= {story0.bgImage}
                        >
                        <p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </p>
                        </Parallax>
                        <div>
                        <BlackTextsml >{story0.tagline}</BlackTextsml>
                        <BlackText >{story0.name}</BlackText>
                        <BlackTextsml >{story0.type}</BlackTextsml>
                        </div>
                  </Link>
              </div>


            <div class="col-start-0 col-span-10 row-start-3 row-span 5 imageblock hover:bg-gray-100">
                <Link to={"/products"} style = {{textDecoration: 'none'}}>
                <Parallax
                    bgImage= {story1.bgImage}
                >
                <p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </p>
                </Parallax>
                <div>
                <BlackTextsml >{story1.tagline}</BlackTextsml>
                <BlackText >{story1.name}</BlackText>
                <BlackTextsml >{story1.type}</BlackTextsml>
                </div>

                  </Link>
              </div>

              <div class="col-start-0 col-span-4 row-start-0 row-span-2 imageblock hover:bg-gray-100 ">
                  <Link to={"/products"} style = {{textDecoration: 'none'}}>

                  <Parallax
                      bgImage= {story2.bgImage}
                  >
                  <p>
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                  </p>
                  </Parallax>
                  <div>
                  <BlackTextsml >{story2.tagline}</BlackTextsml>
                  <BlackText >{story2.name}</BlackText>
                  <BlackTextsml >{story2.type}</BlackTextsml>
                  </div>
                  </Link>
            </div>

        </div>




        </main>
    )
}


export default StoryList;
