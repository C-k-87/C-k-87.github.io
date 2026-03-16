import { Flex, Heading, Section, Text, Box, Button, Link } from "@radix-ui/themes";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <Section id="hero" className="bg">
      <Flex pt={"0"} pb={"4"} direction={"column"} align={"center"}>
        <Box pt={"8"} pb={"8"} display={{ initial: "none", sm: "block" }}></Box>

        <Heading className={"glow giant"}>Charith Kularatne</Heading>

        <Text size={{ initial: "1", sm: "3" }} weight="medium" color="iris">
          ── Software Engineer | AI/ML Researcher ──
        </Text>

        <Box
          pt={"5"}
          width={{ initial: "80%", sm: "50%" }}
          style={{ textAlign: "center" }}
        >
          <Text size={{ initial: "1", sm: "3" }}>
            Creating scalable and maintainable technologies adapting to modern
            trends and technologies
          </Text>
        </Box>

        <Flex pt={"5"} direction={"row"} gap={"4"} justify={"center"}>
          <Button color="iris" size={{ initial: "1", sm: "2" }}>
            React
          </Button>
          <Button color="violet" size={{ initial: "1", sm: "2" }}>
            Node,js
          </Button>
          <Button color="purple" size={{ initial: "1", sm: "2" }}>
            Java
          </Button>
          <Button color="pink" size={{ initial: "1", sm: "2" }}>
            Python
          </Button>
        </Flex>

        <Flex pt={"5"} direction={"row"} gap={"4"} justify={"center"}>
          <Button
            color="plum"
            className="glow-btn"
            size={{ initial: "2", sm: "3" }}
          >
            <Link href="#projects">
                "View Projects ➤"
            </Link>
          </Button>
          <Button color="tomato" size={{ initial: "2", sm: "3" }}>
            <Link href="#contact">
                Get in Touch
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
}
