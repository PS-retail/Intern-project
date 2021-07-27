import React, { useState, useRef, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faClock,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MyTimePicker from "./timePicker";
import Select from "@material-ui/core/Select";

import Button from "../general/button";
import Marginer from "../general/marginer";
import Temporary from "../general/temporary";

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

const Slogan = styled.h1`
  ${tw`
    font-semibold
    text-xl
    text-center
  `};
`;

const Footer = styled.h1`
  ${tw`
    text-base
    text-center
    text-green-400
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
  const [reason, setReason] = useState("");
  const[completion, setCompletion] = useState(false);

  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const wrapperRef = useRef();

  const meetingForm = {
    date: startDate.toString().split(" ").slice(0, 4).join("-"),
    time: startTime,
    reason: reason || "Unspecified",
    status: "Booked",
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
    setCompletion(true);
    console.log(meetingForm);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <CardContainer>
      <Slogan>Select Details</Slogan>
      <Marginer direction="vertical" margin="3em" />
      {/* Date Picker */}
      <ItemContainer ref={wrapperRef}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Call Date</Name>
        <Marginer direction="horizontal" margin="1em" />
        <Name onClick={toggleStartDateCalendar}>{startDate.toString().split(" ").slice(0, 4).join("-")}</Name>
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
        <Name>Call Time</Name>
        <Marginer direction="horizontal" margin="1em" />
        <MyTimePicker value={startTime} onChange={setStartTime} />
      </ItemContainer>

      {/* Choice Picker */}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faAngleDown} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Reason</Name>
        <Marginer direction="horizontal" margin="1em" />
        <Select
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          style={{ width: 150 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Purchase"}>Purchase</MenuItem>
          <MenuItem value={"Complaint"}>Complaint</MenuItem>
          <MenuItem value={"Inquiry"}>Inquiry</MenuItem>
        </Select>
      </ItemContainer>
      <Marginer direction="vertical" margin="3em" />
      <LineSeperator />
      <Marginer direction="vertical" margin="3em" />
      {completion && (<Temporary completion = {completion}><Footer>Booking Completed</Footer></Temporary>)}
      <Marginer direction="vertical" margin="1.4em" />
      <Button text="Book Your Call" onClick={submitHandler} />
    </CardContainer>
  );
};

export default BookCard;
