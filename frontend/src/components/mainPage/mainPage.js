import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`
    flex
    // w-screen
    // h-screen
    w-screen
    h-[1000px]
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
          backgroundImage: `url('https://images.ctfassets.net/8cd2csgvqd3m/5OR4gpRqBzDHJ8D0gxrd0e/2f8644f48f0c54a8c65225ba283b1d19/EQ-features.jpg?q=90&fm=webp&w=1200&h=720&fit=fill')`,
        }}
      >
      </Container>
      <Link to={"/products"} style = {{textDecoration: 'none'}}>
        <Container
          style={{
            backgroundImage: `url('https://dynl.mktgcdn.com/p/U5CdCZWnVKsOsUOlrpUCe_r3Kak48gGKMyugUdU4kaE/1900x1023.jpg')`,
          }}
        >
          <Contents>
            <Text>Explore our collection</Text>
          </Contents>
        </Container>
      </Link>
      <Link to={"/stories"} style = {{textDecoration: 'none'}}>
        <Container
          style={{
            backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C5612AQFHQ6o4l03DDg/article-inline_image-shrink_1000_1488/0/1520219259046?e=1631750400&v=beta&t=7vYXhEJM1CC3Qu1wazs6YKWYFpovbi2j4H0ZANyFP7I')`,
          }}
        >
          <Contents>
            <Text>Our Stories</Text>
          </Contents>
        </Container>
      </Link>
      <Link to={"/login"} style = {{textDecoration: 'none'}}>
        <Container
          style={{
            backgroundImage: `url('https://www.dexigner.com/images/article/61835/Bang_Olufsen_Flagship_New_York_06.jpg')`,
          }}
        >
          <Contents>
            <Text>Customer Support</Text>
          </Contents> 
        </Container>
      </Link>
    </div>
  );
};

export default MainPage;