import React from "react";
import {Parallax } from "react-parallax"
import "./StoryPage.css"
import storiesData from "../storiesData";
import ProductList from "../../products/productList";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

function StoryPage(props) {

    // Use to gather props from Link in StoryList page
    const location = useLocation()  
    let storyId
    let story

    if (location.state === undefined) {
        story = storiesData[1]
    } else {
        storyId = location.state.id
        for (let i = 0 ; i < storiesData.length ; i++) {
            if (storiesData[i].id === storyId) {
                story = storiesData[i]
            }
        }
        if (story === undefined) {
            story = storiesData[1]
        }
    }

    return (
        <div>
            <Parallax 
                bgImage= {story.bgImage} 
                strength={100}
                bgImageStyle={{opacity: "0.9"}}
            >
                {/* Title of the story on top of the parallax */}
                <div style={{ height:1000, objectPosition:'100% 100%'}}>
                    <div className="inlineStyle">{story.name}</div>
                </div>
            </Parallax>

            <div className="background-story-page">
                {/* Description section */}
                <div className="description">
                    <h1 className="description-title">{story.tagline}</h1>
                    <p className="paragraph">{story.description}</p>
                </div>

                {/* "Experience it in AR" section */}
                <div style={{textAlign: 'center'}}>
                    <hr className="horizontal-line"></hr>
                    <h1 className="experience">Try it in your own space</h1>
                    {/* <a href={story.link} target="_blank" className="button">START HERE</a> */}
                    <div>
                        <QRCode value={story.link} size={120}/>
                        <h3 style={{color:"white", paddingTop:'30px', textTransform:"uppercase"}}>Frame the QR code with your smartphone to start the experience</h3>
                    </div>
                    
                    <hr className="horizontal-line"></hr>
                </div>

                {/* "Featured Product" section */}
                <div>
                    <h1 className="featured-products">Featured Products</h1>
                    <ProductList productsId={story.productsIncluded}></ProductList>
                </div>
            </div>
        </div>
    )
}

export default StoryPage
