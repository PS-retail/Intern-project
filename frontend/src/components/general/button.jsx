import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

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
  const { theme, text, className } = props;

  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}

export default Button;