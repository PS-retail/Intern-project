import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Button from "../general/button";
import BookCard from "./bookCard";
import ViewCard from "./viewCard";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const Container = styled.div`
  ${tw`
    w-1/2
    m-auto
    flex
    flex-col
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    text-center
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
    text-center
  `};
`;

const ButtonsContainer = styled.div`
  ${tw`
    relative
    flex
    flex-wrap
    mt-6
  `};
`;

const MeetingPage = () => {
  const [bookCardOpen, setBookCardOpen] = useState(false);
  const [viewCardOpen, setViewCardOpen] = useState(false);

  const toggleCardOpen = () => {
    if (viewCardOpen){
      setViewCardOpen(false);
    }
    setBookCardOpen(prevState => !prevState)
  }
  
  const toggleViewCardOpen = () => {
    if (bookCardOpen){
      setBookCardOpen(false);
    }
    setViewCardOpen(prevState => !prevState)
  }


  return (
    <TopSectionContainer>
      <Container>
        <Slogan>Book or View a Meeting</Slogan>
        <Description>
          Book a meeting with one of our representatives now! Have you already
          booked a meeting with us? You can change it or book another one as
          well!
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Meeting" onClick = {toggleCardOpen}/>
          <Button theme="filled" text="View Existing Meetings" onClick = {toggleViewCardOpen}/>
        </ButtonsContainer>
        {bookCardOpen && <BookCard />}
        {viewCardOpen && <ViewCard/>}
      </Container>
    </TopSectionContainer>
  );
};

export default MeetingPage;
