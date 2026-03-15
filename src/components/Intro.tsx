import { Grid, Heading, Section, Box, Flex } from "@radix-ui/themes";
import "../styles/Intro.css";
import { experience } from "../data/experience";

import ExperienceCard from "./ExperienceCard";

import hero_desktop from "../assets/hero_desktop.png";
import hero_mobile from "../assets/hero_mobile.jpg";

function experienceCards() {
  return (
    <Flex gap={"3"} direction={"column"}>
      {experience.map((e) => (
        <ExperienceCard
          heading={e.heading}
          content={e.content}
          image={e.image}
          date={e.date}
        />
      ))}
    </Flex>
  );
}

function desktopCard() {
  return (
    <Box width={"75%"} display={{ initial: "none", md: "block" }}>
      <Grid
        columns={"65% 35%"}
        rows={"1"}
        justifyItems={"stretch"}
        className="intro-bg"
      >
        <Box p={"5"}>
          <Heading size={"5"} mb={"4"}>
            Work Exposure
          </Heading>
          <Box>{experienceCards()}</Box>
        </Box>
        <Box className="banner">
          <img src={hero_desktop} className="image-cover" />
        </Box>
      </Grid>
    </Box>
  );
}

function mobileCard() {
  return (
    <Box
      width={"75%"}
      display={{ initial: "block", md: "none" }}
      className="intro-bg"
    >
      <Flex p={"3"} direction={"column"} align={"center"} gap={"2"}>
        <Box m={"4"} className="profile-picture">
          <img src={hero_mobile} className="image-cover" />
        </Box>
        <Box maxWidth={"90%"}>
          <Heading size={"4"} mb={"4"} align={"center"}>
            Exposure
          </Heading>
          {experienceCards()}
        </Box>
      </Flex>
    </Box>
  );
}

export default function Intro() {
  return (
    <Section>
      <Flex justify={"center"}>
        {desktopCard()}
        {mobileCard()}
      </Flex>
    </Section>
  );
}
