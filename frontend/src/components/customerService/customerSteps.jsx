import {
  faCommentAlt,
  faVideo,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { AuthContext } from "../general/auth-context";
import Marginer from "../general/marginer";

const Container = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
    `};
`;

const Title = styled.h2`
  ${tw`
      text-3xl
      lg:text-5xl
      text-black
      font-extrabold
    `};
`;

const SubTitle = styled.h2`
  ${tw`
      text-2xl
      text-black
      font-semibold
    `};
`;

const StepsContainer = styled.div`
  ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-7
      lg:mt-16
    `};
`;

const StepContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-red-500
      m-3
    `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
      flex
      rounded-lg
      items-center
      justify-center
      p-6
    `};
`;

const StepTitle = styled.h4`
  ${tw`
      text-black
      text-lg
      font-semibold
      mt-4
    `};
`;

const StepDescription = styled.p`
  ${tw`
      w-10/12
      text-xs
      md:text-sm
      text-center
      text-gray-600
    `};
`;

const StepIcon = styled.span`
  ${tw`
      text-black
      text-3xl
    `};
`;

const CustomerSteps = () => {
  const auth = useContext(AuthContext);

  return (
    <Container>
      <Title>Our Updated Customer Experience!</Title>
      {!auth.isLoggedIn && <Marginer direction="vertical" margin="3em" />}
      {!auth.isLoggedIn && (
        <SubTitle>Login or Register to enjoy our full services!</SubTitle>
      )}
      <Marginer direction="vertical" margin="3em" />
      {auth.isLoggedIn && (
        <StepsContainer>
          <Link to={"/chat"} style={{ textDecoration: "none" }}>
            <StepContainer>
              <Step>
                <StepIcon>
                  <FontAwesomeIcon icon={faCommentAlt} />
                </StepIcon>
              </Step>
              <StepTitle>WebChat</StepTitle>
              <StepDescription>
                Chat One-on-One with one of our representatives.
              </StepDescription>
            </StepContainer>
          </Link>
          <Link to={"/meeting"} style={{ textDecoration: "none" }}>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faVideo} />
              </StepIcon>
            </Step>
            <StepTitle>VideoCall</StepTitle>
            <StepDescription>
              Schedule a live videochat to solve any of your questions.
            </StepDescription>
          </StepContainer>
          </Link>
          <StepContainer>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={faVrCardboard} />
              </StepIcon>
            </Step>
            <StepTitle>AR experience</StepTitle>
            <StepDescription>
              Get the full experience of the B&O products.
            </StepDescription>
          </StepContainer>
        </StepsContainer>
      )}
    </Container>
  );
};

export default CustomerSteps;
