import { Card, Grid, Heading, Text, Box, Flex } from "@radix-ui/themes";
import type { ExperienceType } from "../data/experience";

export default function ExperienceCard({
  heading,
  content,
  image,
  date,
}: ExperienceType) {
  return (
    <Card>
      <Grid
        columns={{ sm: "1", md: "35% 65%" }}
        p={{ sm: "0", md: "4" }}
        rows={"1"}
        align={"center"}
        justifyItems={"stretch"}
      >
        <Flex justify={"center"}>
          <Box
            m={{ initial: "4", md: "-1" }}
            width={{ initial: "50%", md: "100%" }}
          >
            <img
              src={image}
              className="image-cover"
              style={{ border: "solid", borderColor: "gray" }}
            />
          </Box>
        </Flex>
        <Flex
          direction={"column"}
          p={{ initial: "0", md: "5" }}
          justify={"start"}
        >
          <Heading color="crimson" align={{ initial: "center", md: "right" }} size={{initial:"2", md:"7"}}>
            {heading}
          </Heading>
          <Text size={{initial:"1", md:"3"}}>
            <ul>
              {content.map((c) => (
                <li>{c}</li>
              ))}
            </ul>
          </Text>
          <Flex pt={"3"} direction={"row"} justify={{ initial: "center", md: "end" }}>
            <Text weight={"bold"} size={{initial:"1", md:"3"}} color="amber">
              {date}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Card>
  );
}
