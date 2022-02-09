import ToodozePic from "../img/todooze_pic2.png";
import ProjecktsPic from "../img/projeckts_pic2.jpeg";
import FanimePic from "../img/fanime_pic2.png";
import LinkzillaPic from "../img/Linkzilla_pic2.png";
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
    title: "Projeckts",
    tags: ["Flask", "ReactJS", "ChakraUI", "MongoDB"],
    description:
      "Project management software similar to Trello. Utilises a signup/login form that salts the password prior to storing in the database.",
    notes: true,
    externalLink: "https://projeckts.herokuapp.com/",
    githubLink: "https://github.com/tlevy7341/projeckts",
    image: ProjecktsPic,
    reverse: true,
  },
  {
    title: "Notes",
    tags: ["ReactJS", "TailwindCSS", "Supabase"],
    description:
      "Google Keep clone built using React, Tailwind CSS, and Supabase for the backend.",
    notes: false,
    externalLink: "https://tlevy7341.github.io/login",
    githubLink: "https://github.com/tlevy7341/notes",
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
    description: "Website to showcase the apps I built using Flutter. API.",
    notes: false,
    externalLink: "https://hotreloadstudios.com/",
    githubLink: "https://github.com/tlevy7341/hotreloadstudios",
    image: HotReloadStudiosPic,
    reverse: false,
  },
];

export default projects;
