import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./storyList.css";
import storiesData from "../storiesData";
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import StoryCard from "./StoryCard";

const slideImages = [
  'https://images.ctfassets.net/8cd2csgvqd3m/6KBshSexIngc2pqhSFerUs/b1873823238aa5c74a4de6647add6db8/hero_ar_app_web.jpg',
  'https://images.ctfassets.net/8cd2csgvqd3m/3EL23prP6eVLesg8FxrGv6/4f8dfc2c714d2717b33c0f9bb8f6192a/connected_speakers_family.jpg',
  'https://www.scandinaviandesign.com/wp-content/uploads/2020/12/LS_A1_2ndGen_GreyMist_Moment_13-scaled-1.jpg',
];
const slidePositions=[
  '0% 50%',
  '0% 60%',
  '10% 80%',
]
const slideText=[
  'Not sure a device would fit your aesthetic? View it in your home today',
  'Many designs and colours to choose from',
  'For all the family members and occasions you could image',
]
const storycolstart=[
  "col-start-0 col-span-6 row-start-0 row-span-2 imageblock hover:bg-gray-100",
  "col-start-0 col-span-10 row-start-3 row-span 5 imageblock hover:bg-gray-100",
  "col-start-0 col-span-4 row-start-0 row-span-2 imageblock hover:bg-gray-100",
]


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

            <BlackText >
              <p style={{ marginLeft:'100px',letterSpacing:'2px', fontSize:'50px'}}><br />Stories</p>
            </BlackText> 
            <br />
            <BlackTextsml>
              <p style = {{marginLeft:'100px'}}>Get inspired by our collection of narratives</p>
              <br />
            </BlackTextsml >
            <br />


        {/* Slideshow section */}  {/* Slides have been automated */}
        <div style={{fontFamily:'Arial', letterSpacing:'2px'}}>
          <Slide easing="ease">
            {slideImages.map((slideImage, index) => (
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImage})`, backgroundPosition: slidePositions[index]}}>
                  <BlackText style={{color:'white', width:'300px', marginLeft:'100px'}}>
                    <BlackTextsml style={{color:'white'}}>Augmented Reality</BlackTextsml>
                    {slideText[index]}
                  </BlackText>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        <br />

        {/* navbar section */}  {/* navs have been automated */}
        <div className="flex text-gray-200 border-solid border-gray-100   text-center text-gray-100 p-2 " >
          <div className="m-auto">
            <Link style = {{textDecoration: 'underline', color:'gray', textTransform: 'uppercase', fontFamily:'Arial', letterSpacing:'2px',fontSize:'12px'}} > All</Link>
          </div>
          {storycolstart.map((storycolstart, index) => (
            <div className="hover:underline m-auto" >
              <Link to= {{ pathname: "/story1",state: {id: storiesData[index].id,},}}
                style = {{textDecoration: 'none', color:'gray', textTransform: 'uppercase', fontFamily:'Arial', letterSpacing:'2px',fontSize:'12px'}}>{storiesData[index].name}</Link>
            </div>
          ))}

        </div>
        
        <div className="grid grid-cols-10 grid-rows-10 ">
          {storycolstart.map((storycolstart, index) => (
            <StoryCard storycolstart = {storycolstart} index = {index} />
          ))}
        </div>
      </main>
    )
}

export default StoryList;
