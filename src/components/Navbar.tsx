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
          <Button m={"2"} variant="soft" color="gray">
            <Link href="#hero">
                <strong>Intro</strong>
            </Link>
          </Button>
          <Button m={"2"} variant="soft" color="gray">
            <Link href="#about">
                <strong>About</strong>
            </Link>
          </Button>
          <Button m={"2"} variant="soft" color="gray">
            <Link href="#projects">
                <strong>Projects</strong>
            </Link>
          </Button>
          <Button m={"2"} variant="soft" color="gray">
            <Link href="#contact">
                <strong>Contact</strong>
            </Link>
          </Button>
        </Flex>
      </Box>
    </>
  );
}
