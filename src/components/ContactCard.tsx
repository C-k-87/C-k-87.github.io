import { Card, Flex, Text, Heading, Box } from "@radix-ui/themes";
import type { ContactType } from "../data/contacts";

export default function ContactCard({
  icon,
  href,
  link,
  siteName,
}: ContactType) {
  return (
    <Box width={{initial:"100%", md:"70%"}}>
      <a href={href}>
        <Card>
          <Flex p={"2"} align={"center"} gap={"6"}>
            <Box width={"30%"}>
              <img src={icon} style={{width:"90%"}}/>
            </Box>
            <Flex direction={"column"} gap={"1"}>
              <Heading size={{initial:"4", md:"7"}}>{siteName}</Heading>
              <Text size={{initial:"1", md:"2"}}>{link}</Text>
            </Flex>
          </Flex>
        </Card>
      </a>
    </Box>
  );
}
