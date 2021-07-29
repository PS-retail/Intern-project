import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const BaseButton = styled.button`
  ${tw`
    pl-8
    pr-8
    pt-5
    pb-5
    outline-none
    rounded-md
    text-white
    text-base
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-black
    hover:bg-transparent
    hover:text-black
    hover:border-black
  `};
`;

const SmallButton = styled(BaseButton)`
  ${tw`
    bg-black
    pl-4
    pr-4
    pt-2
    pb-2
    bg-gray-100
    text-black
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-black
    text-black
    bg-transparent
    hover:bg-black
    hover:text-white
    hover:border-transparent
  `};
`;

const Button = (props) => {
  const { theme, text, className, onClick, type, to = '/', size, disabled } = props;

  if (size === "small") {
    return (
      <Link to={to}>
        <SmallButton
          className={className}
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {text}
        </SmallButton>
      </Link>
    );
  } else {
    if (theme === "filled")
      return (
          <FilledButton className={className} onClick={onClick} type={type}>
            {text}
          </FilledButton>
      );
    else
      return (
          <OutlinedButton className={className} onClick={onClick} type={type}>
            {text}
          </OutlinedButton>
      );
  }
};

export default Button;
