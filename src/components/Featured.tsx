import { Flex, Section } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";

export default function Featured(){
    return(
        <Section id="projects">
            <Flex direction={"column"} align={"center"} gap={"5"}>
                {projects.map(project =>(
                    <ProjectCard
                        title={project.title}
                        tagline={project.tagline}
                        image={project.image}
                        tech={project.tech}
                        content={project.content}
                    />
                ))}
            </Flex>
        </Section>
    )
}