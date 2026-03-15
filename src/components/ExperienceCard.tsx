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
      <Grid columns={{ sm: "1", md: "30% 70%" }} rows={"1"}>
        <Box className="banner">
          <img src={image} className="image-cover" />
        </Box>
        <Flex direction={"column"} p={"4"} justify={"start"}>
          <Heading color="crimson" align={{ initial: "center", md: "right" }}>
            {heading}
          </Heading>
          <Text>
            <ul>
              {content.map((c) => (
                <li>{c}</li>
              ))}
            </ul>
          </Text>
          <Flex direction={"row"} justify={{ initial: "center", md: "end" }}>
            <Text weight={"bold"} size={"1"} color="violet">
              {date}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </Card>
  );
}
