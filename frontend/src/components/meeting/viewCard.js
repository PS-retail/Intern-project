import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { v4 as uuidv4 } from "uuid";

import { AuthContext } from "../general/auth-context";
import { useHttpClient } from "../general/http-hook";
import Marginer from "../general/marginer";
import MeetingMenu from "./meetingMenu";
import Button from "../general/button";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 25em;
  min-width: 50em;
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
    w-full
    h-full
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
  const { sendRequest } = useHttpClient();
  const [date] = useState(new Date());
  const [bookings, setBookings] = useState();
  const auth = useContext(AuthContext);

  const currentTime = date.getHours() + ":" + date.getMinutes();

  useEffect(() => {
    const fetchBookings = async () => {
      if (auth.isAdmin) {
        try {
          const responseData = await sendRequest({
            url: "http://localhost:5000/api/meetings/creator/retailps",
            headers: null,
          });
          setBookings(responseData.meetings);
        } catch (err) {}
      } else {
        try {
          const responseData = await sendRequest({
            url: "http://localhost:5000/api/meetings/",
            headers: null,
          });
          setBookings(responseData.meetings);
        } catch (err) {}
      }
    };
    fetchBookings();
  }, [sendRequest, auth.isAdmin]);

  useEffect(() => {
    if (bookings) {
      bookings.forEach((booking, idx) => {
        if (booking.time <= currentTime && booking.status === "Booked") {
          let prevState = [...bookings];
          prevState[parseInt(idx)].status = "Active";
          setBookings(prevState);
        }
      });
    }
  }, [currentTime, bookings]);
  return (
    <CardContainer>
      <div>
        <Slogan>Pending Bookings</Slogan>
        <Marginer direction="vertical" margin="3em" />
        {bookings && (
          <ul style={{ listStyleType: "none" }}>
            {/* Time Picker */}
            {bookings.map((booking) => {
              if (booking.status === "Booked" || booking.status === "Active") {
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
                      <VerticalSeperator />
                      <Details>{booking.reason}</Details>
                      <Marginer direction="horizontal" margin="1em" />
                      <Button
                        text={
                          booking.status === "Active"
                            ? "Join Meeting"
                            : "Not Available"
                        }
                        to={`/videochat/${booking.id}`}
                        size={"small"}
                        disabled={booking.status !== "Active"}
                      />
                      <Marginer direction="horizontal" margin="3em" />
                      <MeetingMenu id={booking.id} />
                    </ItemContainer>
                    <LineSeperator />
                  </li>
                );
              }
            })}
          </ul>
        )}

        <Marginer direction="vertical" margin="3em" />
        <LineSeperator />
        <Marginer direction="vertical" margin="3em" />

        <Slogan>Past Bookings</Slogan>
        <Marginer direction="vertical" margin="3em" />
        {bookings && (
          <ul style={{ listStyleType: "none" }}>
            {/* Time Picker */}
            {bookings.map((booking) => {
              if (
                booking.status === "Completed" ||
                booking.status === "Cancelled"
              ) {
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
        )}
      </div>
    </CardContainer>
  );
};

export default ViewCard;
