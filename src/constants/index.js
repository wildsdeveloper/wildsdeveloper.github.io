import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bm_logo,
  alcaldia_bq,
  globant,
  ceiba_software,
  freelance,
  sempli,
  promptopia,
  weather_app,
  github_battle,
  robofriends,
  adoptme,
  adoptmev2,
  en,
  es,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const languages = [
  {
    id: 1,
    icon: es,
  },
  {
    id: 2,
    icon: en,
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
   {
    title: "Master Developer CRM",
    company_name: "Brito Marketing",
    icon: bm_logo,
    iconBg: "#383E56",
    date: "April 2024 - Currently",
    points: [
      "Program website applications. You will be responsible for designing, coding, and
maintain innovative websites and web applications, so that they can be used.",
      "Build web pages with the structure necessary for them to function properly.
correctly.",
      "Create specific functionalities according to the project requirements.",
    ],
  },
  {
    title: "Software Developer Freelance",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "January 2015 - Currently",
    points: [
      "Developing and maintaining web applications using different web technologies and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web UI Developer SSR Advanced",
    company_name: "Globant",
    icon: globant,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "I worked as a front-end developer in a Sodimac Project team in an initiative called Retail",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing an ecommerce platform interface where we developed together with the team different components of an initiative called screens 3.0 creating a new responsive interface",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Developer Architect",
    company_name: "Ceiba Software",
    icon: ceiba_software,
    iconBg: "#E6DEDD",
    date: "September 2021 - January 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Mayor of Barranquilla",
    icon: alcaldia_bq,
    iconBg: "#383E56",
    date: "January 2021 - September 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Component and interface development with React JS Consumption of microservices generated to visualize the data in the database, Development of administrative dashboard to visualize data and reports",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Sempli",
    icon: sempli,
    iconBg: "#E6DEDD",
    date: "September 2020 - November 2020",
    points: [
      "Tropicode Team Capstone project to develop a first solution approach in Machine Learning to Sempli company.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Experience: data cleaning/treatment with Anaconda and Python, landing page layout design, and practicing infrastructure deployment as code with SAM aws services.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have had the opportunity to work with Wilder on multiple occasions which has always been a pleasure. He is driven and motivated with a consistently positive attitude. Wilder excels at communicating with others and is always willing to work hard until he solves the problem at hand.",
    name: "Anderson Lopez",
    position: "IOS Developer",
    company: "Baires Dev",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    position: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our applications, our traffic increased by 50%. We can't thank them enough!",
    name: "Oscar Abril",
    position: "advisor mayor's office of barranquilla",
    company: "mayor's office of barranquilla",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const projects = [
  {
    name: "Adopt Me v2",
    description:
      "Adopt Me is an app built using ReactJs and Tailwind CSS, carried out during the course Complete Intro to React v8 and Intermediate React at Frontend Masters.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: adoptmev2,
    source_code_link: "https://github.com/wildsrincon/adopt-me-v2",
    app_link: "adopt-me-v2.vercel.app",
  },
  {
    name: "Promptopia",
    description:
      "Promptopia website built using NextJs, ReactJs and Tailwind CSS with MongoDB, Express and NextAuth for authentication.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "orange-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/wildsrincon/promptopia",
    app_link: "https://promptopia-five.vercel.app",
  },
  {
    name: "Weather App Angular",
    description:
      "Weather App with geolocalization and pronostic weather for 5 days, build in with Angular 9, API Openweather",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "orange-text-gradient",
      },
    ],
    image: weather_app,
    source_code_link: "https://github.com/wildsrincon/Angular-Weather-App",
    app_link: "https://weather-app-66cf5.firebaseapp.com",
  },
  {
    name: "Github Battle",
    description: "Project developed in React JS, Battle of profiles github.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSX",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: github_battle,
    source_code_link: "https://github.com/wildsrincon/github-battle",
    app_link: "https://github-battle-wr.netlify.app/",
  },
  {
    name: "Robofriends",
    description:
      "Project developed in React JS, search differents robots for name.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSX",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: robofriends,
    source_code_link: "https://github.com/wildsrincon/robofriends",
    app_link: "https://robofriends-wr.netlify.app/",
  },
  {
    name: "Adopt Me",
    description:
      "Project developed in React JS, Final project course Complete Intro to React, v5 and Intermediate React, v2 with Brian Holt",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSX",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: adoptme,
    source_code_link: "https://github.com/wildsrincon/adopt-me",
    app_link: "https://adopt-me-wr.vercel.app/",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  languages,
};
