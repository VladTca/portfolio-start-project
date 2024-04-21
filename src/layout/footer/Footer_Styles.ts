import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.footer`
  position: relative;
  padding: 40px 0;
  background-color: ${theme.colors.primaryBg};
`;
const Name = styled.span`
  letter-spacing: 3px;

  @media ${theme.media.mobile} {
    ${font({
      family: " 'Josefin Sans', sans-serif",
      weight: 700,
      Fmax: 22,
      Fmin: 16,
    })}
  }
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li``;
const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  text-align: center;
  opacity: 0.5;
  font-size: 12px;

  font-weight: 400;
`;

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
};
