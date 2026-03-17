import { Box, Flex, Section, Text } from "@radix-ui/themes";

export default function Footer() {
  return (
    <Section className="footer bg" p="9">
      <Flex
        direction="column"
        className="footer-container"
        align={"center"}
        p={"4"}
      >
        <Box display={{ initial: "none", md: "block" }}>
          <Text size={"3"}>
            © {new Date().getFullYear()} Charith Kularatne | All rights reserved
          </Text>
        </Box>
        <Box display={{ initial: "block", md: "none" }}>
          <Flex direction={"column"} align={"center"}>
            <Text size={"3"}>
              © {new Date().getFullYear()} Charith Kularatne
            </Text>
            <Text>All rights reserved</Text>
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
}
