import React from "react";
import TimePicker from "react-time-picker";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const Picker = styled(TimePicker)`
.react-time-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  ${tw`
    mr-2
    ml-2
    rounded-md
  `};
`;

const MyTimePicker = (props) => {
  const { value, onChange } = props;
  return <Picker value={value} onChange={onChange} />;
};

export default MyTimePicker;
