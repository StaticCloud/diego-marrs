import project from "../utils/projects-interface";
import vinylShelf from "../assets/images/vinyl-shelf.png";
import cargo from "../assets/images/cargo.png";
import steamBannerAPI from "../assets/images/steam-banner-api.png"

const projects: project[] = [
    {
        title: "Vinyl Shelf",
        description: "A platform for vinyl collectors to log and share their collections.",
        github: "https://github.com/StaticCloud/Vinyl-Shelf",
        deployedPage: "https://vinyl-shelf.up.railway.app/",
        preview: vinylShelf
    },
    {
        title: "Steam Banner API",
        description: "An enchanced Steam game banner query and filtering API.",
        github: "https://github.com/StaticCloud/steam-banner-api",
        deployedPage: null,
        preview: steamBannerAPI 
    },
    {
        title: "Cargo",
        description: "A CLI menu-based Docker image and container manager.",
        github: "https://github.com/StaticCloud/Cargo",
        deployedPage: null,
        preview: cargo
    } 
]

export default projects;