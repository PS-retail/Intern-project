import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Marginer from "../general/marginer";
import CustomerSteps from "./customerSteps";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const MainCustomerPage = () => {
  return (
    <PageContainer>
      <Marginer direction="vertical" margin="4em" />
      <CustomerSteps />
      <Marginer direction="vertical" margin="10em" />
    </PageContainer>
  );
}

export default MainCustomerPage;