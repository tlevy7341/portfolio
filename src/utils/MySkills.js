import '../App.css';

const skills = [
    {
        title: "Front End",
        technologies: [
            <i
                className="devicon-html5-plain-wordmark colored skill-icon"
            />,
            <i
                className="devicon-css3-plain-wordmark colored skill-icon"
            />,
            <i
                className="devicon-javascript-plain colored skill-icon"
            />,
            <i
                className="devicon-react-original-wordmark colored skill-icon"
            />,
            <i
                className="devicon-tailwindcss-original-wordmark colored skill-icon"
            />
        ],
    },
    {
        title: "Back End",
        technologies: [
            <i
                className="devicon-nodejs-plain colored skill-icon"
            />,
            <i
                className="devicon-flask-original-wordmark skill-icon"
            />,
            <i
                className="devicon-mongodb-plain-wordmark colored skill-icon"
            />,
            <i
                className="devicon-postgresql-plain-wordmark colored skill-icon"
            />,
        ],
    },
    {
        title: "Tools",
        technologies: [
            <i
                className="devicon-git-plain-wordmark colored skill-icon"
            />,
            <i
                className="devicon-docker-plain-wordmark colored skill-icon"
            />,
            <i
                className="devicon-heroku-plain-wordmark colored skill-icon"
            />,
            <i
                className="devicon-typescript-plain colored skill-icon"
            />,
        ],
    },
];

export default skills;