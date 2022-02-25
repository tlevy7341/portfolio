import React from "react";
import Pdf from "../img/Leverett-Resume.pdf";

const About = ({ myRef }) => {
  return (
    <div ref={myRef} className="bg-darkbg pb-10 text-white">
      <div className="container mx-auto">
        <h2 className="uppercase text-center mb-10 font-bold font-roboto text-4xl">
          About
        </h2>
        <div className="flex  sm:mx-auto sm:w-1/2 flex-col gap-6">
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
            <button className="text-white px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-sky-700 bg-sky-500">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
