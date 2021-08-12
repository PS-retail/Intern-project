import React from "react"
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";


import storiesData from "../storiesData";

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
  mt-1
  mb-3
  text-gray-500
`};
`;


// props: storycolstart, index
function StoryCard(props) {
    return (
    <div class={props.storycolstart}>
        <Link style={{textDecoration: 'none' }} to= {{
            pathname: "/story1",
            state: {id: storiesData[props.index].id,},
            }}>
                
                <div className="img-hover-zoom">
                    <img src={storiesData[props.index].bgImage} alt="story picture" style={{maxWidth:'100%', height:'auto'}} />
                </div>

                <div>
                    <br />
                    <BlackTextsml >{storiesData[props.index].tagline}</BlackTextsml>
                    <BlackText >{storiesData[props.index].name}</BlackText>
                    <div class=" border-solid border-gray-100 w-24 text-center mt-3">
                        <BlackTextsml >{storiesData[props.index].type}</BlackTextsml>
                    </div>
                </div>
        </Link>
    </div>


    )
}

export default StoryCard