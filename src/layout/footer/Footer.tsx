import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const SocialItemsData = [
  {
    iconID: "instagram",
  },
  {
    iconID: "telegram",
  },
  {
    iconID: "vk",
  },
  {
    iconID: "linkedin",
  },
];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Svetlana</S.Name>
        <S.SocialList>
          {SocialItemsData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink>
                  <Icon
                    height={"21"}
                    width={"21"}
                    viewBox={"0 0 21 21"}
                    iconId={s.iconID}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
