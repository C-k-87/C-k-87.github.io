import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import type { ProjectType } from "../data/projects";
import "../styles/ProjectCard.css";
import StackIcon from "tech-stack-icons";

export default function ProjectCard({
  title,
  tagline,
  content,
  tech,
  image,
  git
}: ProjectType) {
  return (
    <>
      <Box maxWidth={"80%"}>
        <Card>
          <Grid
            columns={{ initial: "1", md: "2" }}
            rows={"1"}
            width={"auto"}
            justifyItems={"center"}
          >
            <Box className={"banner rounded"}>
              <img src={image} className="image-cover"></img>
            </Box>
            <Flex direction={"column"} p={"4"} justify={"center"}>
              <Flex direction={"row"} justify={{initial:"center",md:"between"}} p={"3"}>
                <Flex
                  m={"2"}
                  p={"2"}
                  direction={"row"}
                  gap={"4"}
                  justify={"center"}
                  display={{ initial: "none", md: "flex" }}
                >
                  {tech.map((t) => (
                    <StackIcon
                      style={{ width: "30px" }}
                      name={t}
                      variant="dark"
                    />
                  ))}
                </Flex>
                <Flex direction={"column"}>
                  {git ? <Heading
                    mt="4"
                    mb="2"
                    size="7"
                    align={{ initial: "center", md: "right" }}
                    className="glow"
                  >
                    <a href={git}>{title}</a>
                  </Heading>
                  : <Heading
                    mt="4"
                    mb="2"
                    size="7"
                    align={{ initial: "center", md: "right" }}
                  >
                    {title}
                    </Heading>
                  }
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
                  display={{ initial: "flex", md: "none" }}
                >
                  {tech.map((t) => (
                    <StackIcon
                      style={{ width: "30px" }}
                      name={t}
                      variant="dark"
                    />
                  ))}
                </Flex>
                </Flex>
              </Flex>
              <Box p={{ initial: "1", md: "3" }}  className="justify">
                <Text>
                  {content}
                </Text>
              </Box>
            </Flex>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
