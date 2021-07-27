import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { v4 as uuidv4 } from "uuid";


import Marginer from "../general/marginer";
import MeetingMenu from "./meetingMenu";
import EditCard from "./editCard";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25em;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  ${tw`
    rounded-md
    flex-col
    bg-white
    pt-4
    pb-4
    pr-8
    pl-8
  `};
`;

const ItemContainer = styled.div`
  ${tw`
    flex relative
    justify-center
    rounded-md
    hover:bg-gray-200
    w-[700px]
    min-h-[4em]
  `};
`;

const LineSeperator = styled.span`
  width: 45%;
  height: 2px;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
    
  `};
`;

const VerticalSeperator = styled.span`
  width: 2px;
  height: 4em;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
    flex
    justify-center
items-center
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-semibold
    text-xl
    text-center
  `};
`;

const Details = styled.span`
  ${tw`
  flex
  text-gray-600
  text-lg
  cursor-pointer
  select-none
justify-center
items-center
  `};
`;

const ViewCard = () => {
  const [editMenuOpen, setEditMenuOpen] = useState(false);
  const editRef = useRef();

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // if (isStartCalendarOpen) {
          //     setStartCalendarOpen(false);
          // }
          setEditMenuOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(editRef);

  const dummy_bookings = [
    {
      date: "Mon-Jul-26-2021",
      time: "11:00",
      reason: "Purchase",
      status: "Booked",
    },
    {
      date: "Mon-Jul-24-2021",
      time: "11:00",
      reason: "Purchase",
      status: "Completed",
    },
    {
      date: "Mon-Jul-23-2021",
      time: "11:00",
      reason: "Purchase",
      status: "Cancelled",
    },
    {
      date: "Mon-Jul-21-2021",
      time: "11:00",
      reason: "Purchase",
      status: "Completed",
    },
  ];

  return (
    <CardContainer>
      <div ref = {editRef}>
      </div>
      <Slogan>Pending Bookings</Slogan>
      <Marginer direction="vertical" margin="3em" />
      <ul style={{ listStyleType: "none" }}>
        {/* Time Picker */}
        {dummy_bookings.map((booking) => {
          if (booking.status === 'Booked') {
            return (
              <li key={uuidv4()}>
                {editMenuOpen && <EditCard/>}
                <ItemContainer>
                  <Details>{booking.date}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                  <VerticalSeperator />
                  <Details>{booking.time}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                  <VerticalSeperator />
                  <Details>{booking.status}</Details>
                  <Marginer direction="horizontal" margin="6em" />
                  <MeetingMenu editMenuOpen = {editMenuOpen} setEditMenuOpen = {() => setEditMenuOpen(true)}/>
                </ItemContainer>
                <LineSeperator />
              </li>
            );
          }
        })}
      </ul>

      <Marginer direction="vertical" margin="3em" />
      <LineSeperator />
      <Marginer direction="vertical" margin="3em" />

      <Slogan>Past Bookings</Slogan>
      <Marginer direction="vertical" margin="3em" />
      <ul style={{ listStyleType: "none" }}>
        {/* Time Picker */}
        {dummy_bookings.map((booking) => {
          if (booking.status !== 'Booked') {
            return (
              <li key={uuidv4()}>
                <ItemContainer>
                  <Details>{booking.date}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                  <VerticalSeperator />
                  <Details>{booking.time}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                  <VerticalSeperator />
                  <Details>{booking.status}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                </ItemContainer>
                <LineSeperator />
              </li>
            );
          }
        })}
      </ul>


    </CardContainer>
  );
};

export default ViewCard;
