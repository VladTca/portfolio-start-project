import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";

import { TabMenu } from "./tabMenu/TabMenu";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/social-network.png";
import timerImg from "../../../assets/images/timer.jpg";
import {Container} from "../../../components/Container";

const worksItems = ["All", "Landing Page", "React", "Spa"];

export const Works = () => {
  return (
    <StyledWorks>
        <Container>
            <SectionTitle>My Works</SectionTitle>

            <TabMenu menuItems={worksItems}/>
            <FlexWrapper align={'flex-start'} justify={"space-between"}>
                <Work
                    title={"Social Network"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
                    src={socialImg}
                />
                <Work
                    title={"Timer"}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
                    }
                    src={timerImg}
                />
            </FlexWrapper>
        </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`

`;
