import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`
    flex
    w-screen
    h-screen
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
          backgroundImage: `url('https://images.unsplash.com/photo-1598698287642-9ceaf9a7a011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1791&&q=80')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* <Contents>
        </Contents> */}
      </Container>
      <Link to={"/products"} style={{ textDecoration: "none" }}>
        <Container
          style={{
            backgroundImage: `url('https://images.ctfassets.net/8cd2csgvqd3m/2fEIqg1yXYG9XfpzHm4uaA/49f2f49b927902e553554a621df1f53d/harmony_poster_image.JPG')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
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
