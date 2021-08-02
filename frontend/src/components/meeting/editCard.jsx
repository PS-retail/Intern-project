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
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import MyTimePicker from "./timePicker";
import Select from "@material-ui/core/Select";
import { useParams, useHistory } from 'react-router';

import { useHttpClient } from "../general/http-hook";
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
    z-50
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

const DateCalendar = styled(DatePicker)`
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
const EditCard = () => {
  const [form, setForm] = useState(null);
  const [completion, setCompletion] = useState(false);
  const { sendRequest } = useHttpClient();
  const id = useParams().id;

  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const responseData = await sendRequest({
          url: `http://localhost:5000/api/meetings/${id}`,
          headers: null,
        });
        setForm(responseData.meeting);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooking();
  }, [sendRequest, id]);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
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

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      var responseData = await sendRequest({
        url: `http://localhost:5000/api/meetings/${id}`,
        method: "patch",
        data: JSON.stringify({
          date: form.date.toString().split(" ").slice(0, 4).join("-"),
          time: form.time,
          reason: form.reason || "",
          participants: form.participants,
          status: form.status,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.log(err);
    }
    setCompletion(true);
  };

  const handleChange = (event) => {
    setForm({ ...form, reason: event.target.value });
  };

  useOutsideAlerter(wrapperRef);

  return (
    <CardContainer>
      <Slogan>Edit Details</Slogan>
      <Marginer direction="vertical" margin="3em" />
      {/* Date Picker */}
      {form && (
        <ItemContainer ref={wrapperRef}>
          <Icon>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </Icon>
          <Name onClick={toggleStartDateCalendar}>Call Date</Name>
          <Marginer direction="horizontal" margin="1em" />
          <Name onClick={toggleStartDateCalendar}>
            {form.date.toString().split(" ").slice(0, 4).join("-")}
          </Name>
          <SmallIcon>
            <FontAwesomeIcon
              icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
            />
          </SmallIcon>
          {isStartCalendarOpen && (
            <DateCalendar
              value={form.date}
              onChange={(date) => setForm({ ...form, date: date })}
              offset
              inline
            />
          )}
        </ItemContainer>
      )}
      {/* Time Picker */}
      {form && (
        <ItemContainer>
          <Icon>
            <FontAwesomeIcon icon={faClock} />
          </Icon>
          <Name>Call Time</Name>
          <Marginer direction="horizontal" margin="1em" />
          <MyTimePicker
            value={form.time}
            onChange={(time) => {
              console.log(form);
              setForm({ ...form, time: time });
            }}
          />
        </ItemContainer>
      )}
      {/* Choice Picker */}
      {form && (
        <ItemContainer>
          <Icon>
            <FontAwesomeIcon icon={faAngleDown} />
          </Icon>
          <Name>Reason</Name>
          <Marginer direction="horizontal" margin="1em" />
          <Select
            labelId="demo-simple-select-label"
            style = {{minWidth : 120}}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={form.reason}
            onChange={handleChange}
          >
            <MenuItem value={'Purchase'}>Purchase</MenuItem>
            <MenuItem value={'Inquiry'}>Inquiry</MenuItem>
            <MenuItem value={'Delivery'}>Delivery</MenuItem>
            <MenuItem value={'Unspecified'}>Unspecified</MenuItem>
          </Select>
        </ItemContainer>
      )}
      <Marginer direction="vertical" margin="3em" />
      <LineSeperator />
      <Marginer direction="vertical" margin="3em" />
      {completion && (
        <Temporary completion={completion}>
          <Footer>Edit Completed</Footer>
        </Temporary>
      )}
      <Marginer direction="vertical" margin="1.4em" />
      <Button text="Edit Your Call" onClick={submitHandler} />
    </CardContainer>
  );
};

export default EditCard;
