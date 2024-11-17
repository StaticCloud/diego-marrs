import project from "../utils/projects-interface";

const projects: project[] = [
    {
        title: "Vinyl Shelf",
        description: "A platform for vinyl collectors to log and share their collections.",
        github: "https://github.com/StaticCloud/Vinyl-Shelf",
        deployedPage: "https://vinyl-shelf.up.railway.app/"
    },
    {
        title: "Brain Boost",
        description: "A educational platform where students and educators can create flash card sets. Currently in development.",
        github: null,
        deployedPage: null
    },
    {
        title: "Code Cascade",
        description: "A blog site that covers foundational software engineering topics on different technologies.",
        github: "https://github.com/StaticCloud/Code-Cascade",
        deployedPage: "https://code-cascade-bexh.vercel.app/"
    },
    {
        title: "Password Generator",
        description: "A custom password generator that provides a quick, secure password on the fly. This is a very early-career project that I still frequently use.",
        github: "https://github.com/StaticCloud/Password-Generator",
        deployedPage: "https://staticcloud.github.io/Password-Generator/"
    }
]

export default projects;