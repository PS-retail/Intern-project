import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

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
    <Wrapper>
      <ProductContainer>
        <Link to={`/${props.product.id}`}>
          <BlobContainer>
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={props.product.image}
              alt="Product"
            />
          </BlobContainer>
          <Description>{props.product.name}</Description>
        </Link>
      </ProductContainer>
    </Wrapper>
  );
};

export default Product;
