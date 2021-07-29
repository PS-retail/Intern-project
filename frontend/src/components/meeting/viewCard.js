import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { v4 as uuidv4 } from "uuid";

import Marginer from "../general/marginer";
import MeetingMenu from "./meetingMenu";
import EditCard from "./editCard";
import Button from "../general/button";

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
  const [date, setDate] = useState(new Date())
  const editRef = useRef();
  
  const currentTime = date.getHours() + ':' + date.getMinutes();

  const [dummyBookings, setDummyBookings] = useState([
    {
      id : 123,
      date: "Mon-Jul-26-2021",
      time: "09:00",
      reason: "Purchase",
      status: "Booked",
    },
    {
      id: 123,
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
    {
      date: "Mon-Jul-31-2021",
      time: "11:00",
      reason: "Purchase",
      status: "Booked",
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
      var flag = true;
      dummyBookings.forEach(booking => {
        if (booking.status === 'Booked') {
          flag = false;
        }
      })
      if (flag){
        clearInterval(interval);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [dummyBookings]);

  useEffect(() => {
    dummyBookings.forEach((booking, idx) => {
      if (booking.time <= currentTime && booking.status === 'Booked'){
        let prevState = [...dummyBookings];
        prevState[idx].status = 'Active';
        setDummyBookings(prevState);
      }
    })

  }, [currentTime, dummyBookings]);

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



  return (
    <CardContainer>
      <div ref={editRef}></div>
      <Slogan>Pending Bookings</Slogan>
      <Marginer direction="vertical" margin="3em" />
      <ul style={{ listStyleType: "none" }}>
        {/* Time Picker */}
        {dummyBookings.map((booking) => {
          if (booking.status === "Booked" || booking.status === 'Active') {
            return (
              <li key={uuidv4()}>
                {editMenuOpen && <EditCard />}
                <ItemContainer>
                  <Details>{booking.date}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                  <VerticalSeperator />
                  <Details>{booking.time}</Details>
                  <Marginer direction="horizontal" margin="1em" />
                  <VerticalSeperator />
                  <Details>{booking.status}</Details>
                  <Marginer direction="horizontal" margin="3em" />
                  <Button text={booking.status === 'Active' ? "Join Meeting" : "Not Available"} to = {`/videochat/${booking.id}`}size={"small"} disabled={booking.status !== 'Active'} />
                  <Marginer direction="horizontal" margin="3em" />
                  <MeetingMenu
                    editMenuOpen={editMenuOpen}
                    setEditMenuOpen={() => setEditMenuOpen(true)}
                  />
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
        {dummyBookings.map((booking) => {
          if (booking.status === "Completed" || booking.status === 'Cancelled') {
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
