import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";




const items = [
    "Home",
    "Skills",
    "Works",
    "Testimony",
    "Contacts",

]
export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items} />
    </StyledHeader>
  );
};
export const StyledHeader = styled.header`
  background-color: green;
  display: flex;
  justify-content: space-between;
`;
