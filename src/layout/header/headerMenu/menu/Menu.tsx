import React from "react";
import { S } from "./../HeaderMenu_Styles";

// const items = ["Home", "Skills", "Works", "Testimony", "Contacts"];
const items = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Works",
    href: "#works",
  },
  {
    title: "Testimony",
    href: "#testimony",
  },
  {
    title: "Contacts",
    href: "#contacts",
  },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.Link href={`${item.href}`}>
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
