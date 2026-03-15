import { Box, Button, Flex } from "@radix-ui/themes";
import "../styles/Navbar.css"

export default function Navbar(){
    return(
        <>
        <Box className="floating-nav" display={{initial:"none", sm:"block"}}>
            <Flex p={"4"} direction={"row"} justify={"between"}>
                <Button m={"2"} variant="ghost" color="gray"><strong>Intro</strong></Button>
                <Button m={"2"} variant="ghost" color="gray"><strong>About</strong></Button>
                <Button m={"2"} variant="ghost" color="gray"><strong>Projects</strong></Button>
                <Button m={"2"} variant="ghost" color="gray"><strong>Skills</strong></Button>
                <Button m={"2"} variant="ghost" color="gray"><strong>Contact</strong></Button>
            </Flex>
        </Box>
        </>
    )
}