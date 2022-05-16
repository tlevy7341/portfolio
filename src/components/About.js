import React from "react";
import Pdf from "../img/Leverett-Resume.pdf";

const About = () => {
  return (
    <div id="about_container" className="pb-10 text-white bg-darkbg">
      <div className="container mx-auto">
        <h2 className="mb-10 text-2xl font-bold text-center lg:text-5xl font-worksans">
          About
        </h2>
        <div className="flex flex-col gap-6 sm:mx-auto sm:w-1/2">
          <p className="px-5 sm:px-0">
            Hello! My name is Tyrail Leverett and I am a Help Desk Specialist
            turned into a Front-End Web Developer. I really enjoy creating
            exciting web applications using current web technologies.
          </p>
          <p className="px-5 sm:px-0">
            Currently, my go-to tech stack for implementing a web application is
            ReactJS/NextJS for the frontend, NodeJS (if I am not using NextJS)
            for the backend, Prisma for the ORM to connect to the database, and
            PostgreSQL for the database. I also use Typescripts in my projects
            as it makes development life easier in the long run. I also am
            currently learning Svelte as it is a blast to use.
          </p>

          <a
            className="self-center"
            href={Pdf}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="px-2 py-1 text-white rounded sm:px-4 sm:py-2 hover:bg-sky-700 bg-sky-500">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
