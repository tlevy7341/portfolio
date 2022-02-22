import ToodozePic from "../img/todooze_pic2.png";
import HadWorkPic from "../img/HadWork_pic.png";
import FanimePic from "../img/fanime_pic2.png";
import HotReloadStudiosPic from "../img/hotreloadstudios.png";
import NotesPic from "../img/Notes_Pic.png";

const projects = [
  {
    title: "Todooze",
    tags: ["Flask", "ReactJS", "ChakraUI", "PostgresSQL"],
    description:
      "A simple Todo application. I used SQLAlchemy as the ORM to interface with Postgres.",
    notes: true,
    externalLink: "https://todooze.herokuapp.com/",
    githubLink: "https://github.com/tlevy7341/todooze",
    image: ToodozePic,
    reverse: false,
  },
  {
    title: "HadWork",
    tags: ["NextJS", "ChakraUI", "Supabase"],
    description:
      "Kanban Project management Website which was built using NextJS. Libraries that were used to complete this project include Supabase for the DB, ChakraUI for the styling, NextAuth for authentication, React Query for caching, React Hook Form, and Framer Motion for the animations.",
    notes: false,
    externalLink: "https://hadwork.vercel.app/",
    githubLink: "https://github.com/tlevy7341/hadwork",
    image: HadWorkPic,
    reverse: true,
  },
  {
    title: "Notes",
    tags: ["NextJS", "TailwindCSS", "Prisma", "PostgreSQL"],
    description: `Google Keep clone for taking simple notes which was built using NextJS, Tailwind CSS, Prisma for the ORM, and PostgreSQL for the database.
       Libraries that were used to complete this project include NextAuth for authentication, React Query for caching, React Hook Form, and Framer Motion for the animations.`,
    notes: false,
    externalLink: "https://next-notes-gamma.vercel.app",
    githubLink: "https://github.com/tlevy7341/next-notes",
    image: NotesPic,
    reverse: false,
  },
  {
    title: "Fanime",
    tags: ["Flask", "ReactJS", "ChakraUI", "Jikan API"],
    description:
      "Website to view popular Anime and get recommendations. I used the Jikan API to gather the data to be displayed.",
    notes: true,
    externalLink: "https://fanime2.herokuapp.com/",
    githubLink: "https://github.com/tlevy7341/fanime",
    image: FanimePic,
    reverse: true,
  },
  {
    title: "Hot Reload Studios",
    tags: ["ReactJS", "TailwindCSS"],
    description: "Website to showcase the apps I have built using Flutter.",
    notes: false,
    externalLink: "https://hotreloadstudios.com/",
    githubLink: "https://github.com/tlevy7341/hotreloadstudios",
    image: HotReloadStudiosPic,
    reverse: false,
  },
];

export default projects;
