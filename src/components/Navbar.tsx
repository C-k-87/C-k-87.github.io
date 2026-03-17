import { Box, Button, Flex, Link } from "@radix-ui/themes";
import "../styles/Navbar.css";
import icon from "../assets/icon.png";

export default function Navbar() {
  return (
    <>
      <Box className="floating-nav" display={{ initial: "none", sm: "block" }}>
        <Flex p={"4"} direction={"row"} justify={"between"} align={"center"}>
          <Flex ml="4" width={"4.5%"} justify={"center"}>
            <img src={icon} width={"100%"} />
          </Flex>
          <Link href="#hero">
            <Button m={"2"} variant="soft" color="gray">
              <strong>Intro</strong>
            </Button>
          </Link>
          <Link href="#about">
            <Button m={"2"} variant="soft" color="gray">
              <strong>About</strong>
            </Button>
          </Link>
          <Link href="#projects">
            <Button m={"2"} variant="soft" color="gray">
              <strong>Projects</strong>
            </Button>
          </Link>
          <Link href="#contact">
            <Button m={"2"} variant="soft" color="gray">
              <strong>Contact</strong>
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
