import skill from "../utils/skills-interface";

const languages: skill[] = [
    {
        skill: "C#",
        icon: "csharp-plain",
        description: "A versatile, strongly-typed, object-oriented programming language developed by Microsoft. "
    },
    {
        skill: "TypeScript",
        icon: "typescript-plain",
        description: "A superset of JavaScript that provides static typing to the JavaScript language."
    },
    {
        skill: "HTML",
        icon: "html5-plain",
        description: "A markup language that provides content structure to web pages."
    },
    {
        skill: "CSS",
        icon: "css3-plain",
        description: "A style sheet language used in web development to incorporate styling into web pages."
    },
    {
        skill: "JavaScript",
        icon: "javascript-plain",
        description: "A web-based programming language primarily used to add functionality to web pages."
    },
    {
        skill: "PostgreSQL",
        icon: "postgresql-plain",
        description: "An ACID-compliant, relational database management system that serves as an extension of the SQL language."
    }
]

const librariesFrameworks: skill[] = [
    {
        skill: "ASP.NET",
        icon: "dot-net-plain",
        description: "A feature-rich, robust, and highly scalable web development framework that exists as part of Microsoft's .NET ecosystem."
    },
    {
        skill: "Express.js",
        icon: "express-original",
        description: "A back-end web application framework that enables developers to build RESTful APIs with JavaScript or TypeScript."
    },
    {
        skill: "React",
        icon: "react-original",
        description: "A front-end, component-based library that allows developers to build user interfaces with JavaScript or TypeScript."
    },
    {
        skill: "Prisma",
        icon: "prisma-original",
        description: "An object-relational mapper that allows for programmatic interfacing with databases, including defining tables and queries."
    }
]

const tools: skill[] = [
    {
        skill: "AWS",
        icon: "amazonwebservices-plain-wordmark",
        description: "A suite of cloud-computing services that include storage, networking, deployment, data analysis, machine learning, and more."
    },
    {
        skill: "Docker",
        icon: "docker-plain",
        description: "A containerization tool that enables developers to package their software, ensuring consistency across environments."
    },
    {
        skill: "Node.js",
        icon: "nodejs-plain-wordmark",
        description: "A runtime environment that enables developers to build server-side applications using JavaScript or TypeScript."
    },
    {
        skill: "Railway",
        icon: "railway-original",
        description: "A cloud deployment platform that enables developers to deploy their applications with ease."
    },
    {
        skill: "Git",
        icon: "git-plain",
        description: "A version control tool that enables file change tracking in project source code."
    },
    {
        skill: "Postman",
        icon: "postman-plain",
        description: "A platform for building or manually testing RESTful APIs."
    }
]

export { languages, librariesFrameworks, tools };