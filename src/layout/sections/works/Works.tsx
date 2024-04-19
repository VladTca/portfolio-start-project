import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/social-network.png";
import timerImg from "../../../assets/images/timer.jpg";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";

const tabsItems: Array<{
  status: TabStatusType;
  title: string;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "Spa",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    src: socialImg,
    type: "spa",
  },
  {
    title: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    src: timerImg,
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = React.useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "lending") {
    filteredWorks = worksData.filter((w) => w.type === "landing");
  } else if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((w) => w.type === "react");
  } else if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((w) => w.type === "spa");
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>

        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          align={"flex-start"}
          justify={"space-between"}
          wrap={"wrap"}
        >
          {filteredWorks.map((w, index) => {
            return (
              <Work key={index} title={w.title} text={w.text} src={w.src} />
            );
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
