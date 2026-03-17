import git from "../assets/contacts/git.png"
import linkedin from "../assets/contacts/linkedin.png"
import email from "../assets/contacts/email.png"

export type ContactType = {
    icon : string,
    siteName : string,
    link : string,
    href : string
}

export const contacts: ContactType[] = [
    {
        icon: git,
        siteName: "GitHub",
        link: "github.com/C-k-87",
        href: "https://github.com/C-k-87"
    },
    {
        icon: linkedin,
        siteName: "LinkedIn",
        link: "linkedin.com/in/ckularatne",
        href: "https://linkedin.com/in/ckularatne"
    },
    {
        icon: email,
        siteName: "Email",
        link: "cbkularatne2m@gmail.com",
        href: "mailto:cbkularatne2m@gmail.com"
    },
]