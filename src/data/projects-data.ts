import project from "../utils/projects-interface";
import vinylShelf from "../assets/images/vinyl-shelf.png";
import cargo from "../assets/images/cargo.png";
import codeCascade from "../assets/images/code-cascade.png";

const projects: project[] = [
    {
        title: "Vinyl Shelf",
        description: "A platform for vinyl collectors to log and share their collections.",
        github: "https://github.com/StaticCloud/Vinyl-Shelf",
        deployedPage: "https://vinyl-shelf.up.railway.app/",
        preview: vinylShelf
    },
    {
        title: "Cargo",
        description: "A CLI menu-based Docker image and container manager.",
        github: "https://github.com/StaticCloud/Cargo",
        deployedPage: null,
        preview: cargo
    },
    {
        title: "Code Cascade",
        description: "A blog site that covers foundational software engineering topics on different technologies.",
        github: "https://github.com/StaticCloud/Code-Cascade",
        deployedPage: "https://code-cascade-bexh.vercel.app/",
        preview: codeCascade
    }
]

export default projects;