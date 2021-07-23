import React, { useState, useRef, useEffect } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MyTimePicker from "./timePicker";

import Button from "../general/button";
import Marginer from "../general/marginer";

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
    ml-auto
    mr-auto
    mb-5
  `};
`;

const Icon = styled.span`
  ${tw`
    text-black
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-lg
    cursor-pointer
    select-none
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

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;
  z-index: 100;
  ${({ offset }) =>
    offset &&
    css`
      left: -6em;
    `};
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  const [reason, setReason] = useState(null);

  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const wrapperRef = useRef();

  let meetingForm = {
    date: startDate,
    time: startTime,
    reason: reason
  };


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
          setStartCalendarOpen(false);
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

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
  };

  const submitHandler = () => {
    console.log(meetingForm);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <CardContainer>
      {/* Date Picker */}
      <ItemContainer ref={wrapperRef}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Call Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} offset />
        )}
      </ItemContainer>
      {/* Time Picker */}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faClock} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Call Time</Name>
        <Marginer direction="horizontal" margin="1em" />
        <MyTimePicker value={startTime} onChange={setStartTime} />
      </ItemContainer>

      {/* Choice Picker */}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faClock} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Reason</Name>
        <Marginer direction="horizontal" margin="1em" />
        <MyTimePicker value={startTime} onChange={setStartTime} />
      </ItemContainer>

      <LineSeperator />
      <Marginer direction="vertical" margin="2em" />
      <Button text="Book Your Call" onClick={submitHandler} />
    </CardContainer>
  );
};

export default BookCard;
