import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`
    flex
    w-screen
    h-[720px]
    m-0
    p-0
    bg-cover
    bg-no-repeat
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
  font-bold
  text-white
`};
`;

const MainPage = () => {
  return (
    <div style={{ display: "block" }}>
      <Container
        style={{
          backgroundImage: `url('https://mobius-luxury.eu/image/catalog/Bang--amp--Olufsen/H9i/bang_olufsen_beoplay_h9i_natural_10_00.jpg')`,
        }}
      >
        <Contents>
          <Text>Welcome to B&O</Text>
        </Contents>
      </Container>
      <Link to={"/products"} style = {{textDecoration: 'none'}}>
        <Container
          style={{
            backgroundImage: `url('https://images.ctfassets.net/8cd2csgvqd3m/2fEIqg1yXYG9XfpzHm4uaA/49f2f49b927902e553554a621df1f53d/harmony_poster_image.JPG')`,
          }}
        >
          <Contents>
            <Text>Explore our collection</Text>
          </Contents>
        </Container>
      </Link>
    </div>
  );
};

export default MainPage;
