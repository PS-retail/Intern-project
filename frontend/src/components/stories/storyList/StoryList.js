import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./storyList.css";
import storiesData from "../storiesData.js";
import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://www.wearable-technologies.com/wp-content/uploads/2018/10/Unity-ar-ads-1.png',
  'https://bevel.space/wp-content/uploads/2018/10/Bevel_Mobile_AR_header-crop.png',
  'https://cdn.shopify.com/s/files/1/1551/3581/files/AR_Room_Edited_02_large.jpg?v=1556729184',
  //'https://dynl.mktgcdn.com/p/4TZImYskTdK9zkIEkix4H3qhsKNgUVNMwDHszZPdUsI/619x412.jpg',
  //'https://images.ctfassets.net/8cd2csgvqd3m/6MtLXbfhaybi4ez8T534on/5f76e80aec5f10d13d0248aa50c9a8ec/XL.jpg',
  //'https://d3boo0lmrw6bqz.cloudfront.net/img/iws/iws_header.jpg'
];



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
const Textsml = styled.div`
  ${tw`
  text-base

  text-white
  text-left
`};
`;
function StoryList() {
    return (
        <main>



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




        <div class="grid grid-cols-10 grid-rows-10 ">

            <div class="col-start-0 col-span-6 row-start-0 row-span-2 ">
                <Link to={"/story1"} style = {{textDecoration: 'none'}}>

                    <Container
                          style={{
                          backgroundImage: `url("https://scontent.fman4-2.fna.fbcdn.net/v/t31.18172-8/18237778_10154308772756607_8484243844086929707_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=973b4a&_nc_ohc=ArIitRTwEoMAX8kThDc&_nc_ht=scontent.fman4-2.fna&oh=ea0b93405c40e9be39be6ae477108ec9&oe=612FD005")`,
                          }}
                    >
                        <Contents>
                        <Text >Childcare night to day   </Text>
                        </Contents>
                    </Container>

                  </Link>
              </div>


            <div class="col-start-0 col-span-10 row-start-3 row-span 5 ">
                <Link to={"/products"} style = {{textDecoration: 'none'}}>
                <Container
                    style={{
                        backgroundImage: `url("https://images.ctfassets.net/8cd2csgvqd3m/6MtLXbfhaybi4ez8T534on/5f76e80aec5f10d13d0248aa50c9a8ec/XL.jpg")`,
                        }}
                        >
                  <Contents>
                  <Text >Experience the ultimate cinematic experience in your home</Text>
                  </Contents>
                  </Container>
                  </Link>
              </div>

              <div class="col-start-0 col-span-4 row-start-0 row-span-2">
                  <Link to={"/products"} style = {{textDecoration: 'none'}}>

                  <Container
                  style={{
                    backgroundImage: `url('https://www.jebiga.com/wp-content/uploads/2016/04/Bang-Olufsen-Beoplay-A1-1.jpg')`,
                  }}
                  >
                  <Contents>
                  <Text>Party in your home  </Text>
                  </Contents>
                  </Container>
                  </Link>
            </div>

        </div>




        </main>
    )
}


export default StoryList;
