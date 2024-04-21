import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  position: relative;
`;

const Skill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 50px;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;

  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

const IconWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: " ";
    position: absolute;
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.1);
    z-index: -1;
    top: 50%;
    left: 50%;
    transform-origin: top left;
  }
`;

export const S = {
  Skills,
  Skill,
  SkillTitle,
  SkillText,
  IconWrapper,
};
