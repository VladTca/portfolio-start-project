import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { Link } from "../../../components/Link";

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 30px;
  }
`;

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  //
  //width: 330px;
  //flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
  //
  // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`;

const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    opacity: 0;
    transition: ${theme.animation.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: ${theme.animation.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;
const Description = styled.div`
  padding: 25px 20px;
`;

export const S = {
  Works,
  Work,
  Image,
  ImageWrapper,
  Title,
  Text,
  Description,
};
