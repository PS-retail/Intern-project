import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import "./product.css"

const Wrapper = styled.main`
  ${tw`
  flex
  m-px
`};
`;

const ProductContainer = styled.div`
  ${tw`
    flex
    relative
    w-[100%]
    h-[400px]
    shadow-inner
    bg-white hover:bg-gray-50 
  `};
`;

const Description = styled.p`
  ${tw`
    absolute
    bottom-10
    ml-[160px]
    text-2xl
    overflow-hidden
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  ${tw`
  absolute
  top-0
  w-3/4
  h-3/4
  mr-auto
  ml-16
`};
`;

const Product = (props) => {
  return (
    // <Wrapper>
    //   <ProductContainer>
    //     <BlobContainer>
    //       <img
    //         style={{ maxWidth: "100%", maxHeight: "100%" }}
    //         src={props.product.image}
    //         alt = 'Product Image'
    //       />
    //     </BlobContainer>
    //     <Description>{props.product.name}</Description>
    //   </ProductContainer>
    // </Wrapper>


    // <Card className={classes.root}>
    //   <Link to={`/${props.product.id}`}>
    //     <CardMedia className={classes.media} image={props.product.image} />
    //     <CardContent
    //       style={{ paperContainer: { backgroundImage: `url(props.image)` } }}
    //     >
    //       <div className={classes.cardContent}>
    //         <Typography variant="h5" gutterBottom>
    //           {props.product.name}
    //         </Typography>
    //         <br />
    //         <Typography variant="h6">{props.product.description}</Typography>
    //       </div>
    //     </CardContent>
    //   </Link>
    // </Card>

    // ALEX
    <div className ="card">
        <div className="imgBx">
            <img src={props.product.image}></img>
        </div>
        <div className="contentBx">
            <h3>{props.product.name}</h3>
            {/* <h2 class="price">$40.<small>99</small></h2> */}
            <h2 className="description">{props.product.description}</h2>
            <a href={props.product.augmentedReality} target="_blank" className="buy">Try in AR</a>
        </div>
    </div>
  );
};

export default Product;
