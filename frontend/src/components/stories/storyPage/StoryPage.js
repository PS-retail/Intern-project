import React from "react";
import { Background, Parallax } from "react-parallax"
import "./StoryPage.css"
// import Button from "../../general/button";

const goodImage = "https://source.unsplash.com/9vDdkxSCAD4/1920x1280"

function StoryPage() {
    return (
        <div style= {{ textAlign: 'center' }}>
            <Parallax 
                bgImage= { goodImage } 
                strength={100}
                // bgImageSizes={{height:"1500"}}
                bgImageStyle={{opacity: "0.9"}}
            >
                {/* <div style={{ height:1000}}> */}
                <div style={{ height:1000, objectPosition:'100% 100%'}}>
                    <div className="inlineStyle">Party in AR</div>
                </div>
            </Parallax>

            {/* Description section */}
            <div className="background">
                <div className="description">
                    <h1 className="description-title">Party</h1>
                    <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

                {/* Experience it in AR section */}
                <div>
                    <hr className="horizontal-line"></hr>
                    <h1 className="experience">Experience it in AR</h1>
                    <button className="button">START HERE</button>
                    <hr className="horizontal-line"></hr>
                </div>

                {/* Featured Product section */}
                <div>
                    <h1 className="featured-products">Featured Products</h1>
                </div>

            </div>
        </div>
    )
}

export default StoryPage
