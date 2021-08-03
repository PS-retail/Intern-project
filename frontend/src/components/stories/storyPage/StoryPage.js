import React from "react";
import { Background, Parallax } from "react-parallax"
import "./StoryPage.css"
import storiesData from "../storiesData";
import ProductList from "../../products/productList";

function StoryPage(props) {
    let story
    if (props.id == undefined) {
        story = storiesData[1]
    } else {
        story = storiesData[props.id]
    }

    return (
        <div>
            <Parallax 
                bgImage= {story.bgImage} 
                strength={100}
                bgImageStyle={{opacity: "0.9"}}
            >
                {/* <div style={{ height:1000}}> */}
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
                    <h1 className="experience">Experience it in AR</h1>
                    <a href={story.link} target="_blank" className="button">START HERE</a>
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
