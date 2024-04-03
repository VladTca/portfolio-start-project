import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/sveta.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"} direction={"row"}>
        <div>
          <span>Hi There</span>
          <NameSD>I am Svetlana Dyablo</NameSD>
          <MainTitle>A Web Developer. </MainTitle>
        </div>
        <Photo src={photo} />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1`
  font-size: 60px;
`;

const NameSD = styled.h2`
  font-size: 60px;
`;
