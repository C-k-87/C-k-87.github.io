import { Flex, Section, Text } from "@radix-ui/themes";

export default function Footer() {
  return (
    <Section className="footer bg" p="7">
      <Flex direction="column" className="footer-container" align={"center"} p={"4"}>
        <Text size={{initial:"1", md:"3"}}>
          © {new Date().getFullYear()} Charith Kularatne | All rights reserved
        </Text>
      </Flex>
    </Section>
  );
}
