import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import type { ProjectType } from "../data/projects";
import "../styles/ProjectCard.css";

export default function ProjectCard({
  title,
  tagline,
  content,
  tech,
  image,
}: ProjectType) {
  return (
    <>
      <Box maxWidth={"80%"}>
        <Card>
          <Grid
            columns={{ initial: "1", md: "2" }}
            rows={{ initial: "2", md: "1" }}
            width={"auto"}
            justifyItems={"center"}
          >
            <Box className="banner">
              <img src={image} className="image-cover"></img>
            </Box>
            <Flex direction={"column"} p={"4"} justify={"center"}>
              <Heading
                mt="4"
                mb="2"
                size="7"
                align={{ initial: "center", md: "right" }}
              >
                {title}
              </Heading>
              <Text
                mb={"4"}
                weight={"medium"}
                color={"crimson"}
                align={{ initial: "center", md: "right" }}
              >
                {tagline}
              </Text>
              <Flex
                m={"2"}
                p={"2"}
                direction={"row"}
                gap={"4"}
                justify={"center"}
              >
                {tech.map((t) => (
                  <Button color="iris">{t}</Button>
                ))}
              </Flex>
              <Text>{content}</Text>
            </Flex>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
