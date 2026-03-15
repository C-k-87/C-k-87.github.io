import syscolabslogo from "../assets/syscologo.png"
import uorlogo from "../assets/uorlogo.png"

export type ExperienceType = {
    heading : string,
    content : string[]
    image : string
    date : string
}

export const experience: ExperienceType[] = [
    {
        heading: "Internship - Sysco LABS",
        content: [
            "API and Feature Development",
            "Platform Maintenance and Code Quality",
            "Assisted in Production Release Workflows",
            "Completed Project SUMMIT"
        ],
        image:syscolabslogo,
        date:"MAY 2024 - NOV 2024"
    },
    {
        heading: "University of Ruhuna",
        content: [
            "Designed Vector Memory enhanced, RL based algorithm to improve coding performance of local LLM Agent",
            "Several Research and Development Projects including Event-Driven Microservice Application",
            "Leadership Training and Colours Holder as a member of the University Basketball Team"
        ],
        image:uorlogo,
        date:"MAR 2021 - 2026(Expected)"
    },
]