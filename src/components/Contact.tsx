import { Box, Flex, Heading, Text, Section } from "@radix-ui/themes";
import ContactCard from "./ContactCard";

import { contacts } from "../data/contacts";

function desktopCard() {
  return (
    <Box display={{ initial: "none", md: "block" }}>
      <Heading align={"center"}>
        Let's build together.{" "}
        <Text size={"8"} ml={"2"} className="glow" color="crimson">
          Get in touch
        </Text>
      </Heading>
    </Box>
  );
}

function mobileCard() {
  return (
    <Box display={{ initial: "block", md: "none" }}>
      <Flex direction={"column"}>
        <Heading size={"5"} align={"center"}>
          Let's build together.
        </Heading>
        <Text
          size={"7"}
          ml={"2"}
          className="glow"
          color="crimson"
          align={"center"}
        >
          Get in touch
        </Text>
      </Flex>
    </Box>
  );
}

export default function Contact() {
  return (
    <Section id="contact" p={"4"}>
      <Flex direction={"column"} align={"center"} gap={"2"}>
        <Box p={"5"}>
          {desktopCard()}
          {mobileCard()}
        </Box>
        <Box width={"90%"}>
          <Flex
            direction={{ initial: "column", md: "row" }}
            justify={"center"}
            align={"center"}
            gap={"4"}
          >
            {contacts.map((c) => {
              return (
                <ContactCard
                  icon={c.icon}
                  href={c.href}
                  link={c.link}
                  siteName={c.siteName}
                />
              );
            })}
          </Flex>
        </Box>
        <Box pt={"8"}>
          <Heading>Or <a href="/cv.pdf" target="_blank"><Text className="glow">check out my resume</Text></a></Heading>
        </Box>
      </Flex>
    </Section>
  );
}
