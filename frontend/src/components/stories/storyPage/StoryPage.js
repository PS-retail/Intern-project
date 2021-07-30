import React from "react";
import { Background, Parallax } from "react-parallax"
import styles from "./StoryPage.css"

const goodImage = "https://source.unsplash.com/9vDdkxSCAD4/1920x1280"
const imageOne =  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1280&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzU3NDA4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
const imageTwo = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
const imageThree = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001"
const imageFour = "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const imageFive = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";


const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '-50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
}


function StoryPage() {
    return (
        <div style= {{ textAlign: 'center' }}>
            <Parallax 
                bgImage= { goodImage } 
                strength={500}
                bgImageStyle= {{
                    width: '100%',
                    height: 'auto',
                    position: "relative"
                }}>
                <div style={{ height:500 }}>
                {/* <div > */}
                    <div style={inlineStyle}>HTML inside the parallax</div>
                </div>
            </Parallax>
            
            <h1>| | |</h1>
            <Parallax bgImage= { imageThree } blur={{ min: -1, max: 5 }}>
                <div style={{ height:500 }}>
                    <div style={inlineStyle}>Dynamic blur</div>
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax bgImage= { imageFour } strength={-200}>
                <div style={{ height:500 }}>
                    <div style={inlineStyle}>Reverse direction</div>
                </div>
            </Parallax>
            <h1>| | |</h1>
            <Parallax 
                bgImage= { imageFive } 
                strength={200}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: `rgba(255, 123, 23, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) scale(${percentage * 5})`,
                        }}
                    >
                    </div>
                )}
            >
                <div style={{ height:500 }}>
                    <div style={inlineStyle}>Render prop</div>
                </div>
            </Parallax>
            <div style={{ height: '100vh' }}></div>
        </div>
    )
}

export default StoryPage
