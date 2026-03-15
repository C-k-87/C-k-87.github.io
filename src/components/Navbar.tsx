import { Box, Button, Flex } from "@radix-ui/themes";
import "../styles/Navbar.css"

export default function Navbar(){
    return(
        <>
        <Box className="floating-nav" display={{initial:"none", sm:"block"}}>
            <Flex p={"4"} direction={"row"} justify={"between"}>
                <Button m={"2"} variant="ghost" color="gray">Intro</Button>
                <Button m={"2"} variant="ghost" color="gray">About</Button>
                <Button m={"2"} variant="ghost" color="gray">Projects</Button>
                <Button m={"2"} variant="ghost" color="gray">Skills</Button>
                <Button m={"2"} variant="ghost" color="gray">Contact</Button>
            </Flex>
        </Box>
        </>
    )
}