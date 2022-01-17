import { RiComputerLine } from 'react-icons/ri';
import { IProject,IService, Iskill } from './type';
import { FaCss3, FaReact, FaServer } from "react-icons/fa";
import { MdDeveloperMode} from "react-icons/md";
import {BsCircleFill} from "react-icons/bs";
import { FiFigma } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
export const services: IService[] = [
    {
        id: 0,
        Icon: FaReact,
        title: "Frontend Development",
        about:
            "I can build any type of modern and High Tech website using <b>React.js</b>, <b>Next.js</b>, <b>TypeScript</b>, <b>Axios</b>, <b>Rest API</b>.",
    },
    {
        id: 1,
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "handle database, server, api using <b>Express</b>, <b>MongoDb</b>, <b>AWS</b>, <b>Firebase</b> & other popular frameworks",
    },
    {
        id: 2,
        Icon: RiComputerLine,
        title: "CSS Framework",
        about:
            "Pixel Perfect Development with fully handed code or can using framework: <b>Bootstrap</b>, <b>Tailwind</b>, <b>Material-UI</b>.",
    },
    {
        id: 3,
        Icon: FiFigma,
        title: "UI/UX",
        about:"user interface to html designer using <b>Photoshop</b>, <b>Illustrator</b>, <b>XD</b>, <b>PSD</b>, <b>JPG, PNG, Jpeg</b>, <b>Figma</b>  and any other tools",
    },
    {
        id: 4,
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "I built 100% client satisfied website cheaper price.I provide latest design which will help growing more visitors in your website.",
    },
    {
        id: 5,
        Icon: AiOutlineFileSearch,
        title: "Search Engine Optimization (SEO)",
        about:
            "Highly optimizing the online visibility of a website in a search engine's organic/unpaid results.",
    },
]


export const languages:Iskill[] = [
    {
      id: 0,
      name: 'React',
      level : '95%',
      Icon: BsCircleFill
    },
    {
      id: 1,
      name: 'Node',
      level : '75%',
      Icon: BsCircleFill
    },{
      id: 2,
      name: 'Mongodb',
      level : '85%',
      Icon: BsCircleFill
    },{
      id: 3,
      name: 'Express',
      level : '85%',
      Icon: BsCircleFill
    },{
      id: 4,
      name: 'Next Js',
      level : '80%',
      Icon: BsCircleFill
    },{
      id: 5,
      name: 'TypeScript',
      level : '80%',
      Icon: BsCircleFill
    },{
      id: 8,
      name: 'javascript',
      level : '95%',
      Icon: BsCircleFill
    },{
      id: 6,
      name: 'HTML5',
      level : '100%',
      Icon: BsCircleFill
    },{
      id: 7,
      name: 'css3',
      level : '100%',
      Icon: BsCircleFill
    },{
      id: 9,
      name: 'scss',
      level : '100%',
      Icon: BsCircleFill
    },{
      id: 10,
      name: 'Bootstrap',
      level : '98%',
      Icon: BsCircleFill
    },{
      id: 11,
      name: 'Tailwind',
      level : '95%',
      Icon: BsCircleFill
    },{
      id: 12,
      name: 'Material UI',
      level : '90%',
      Icon: BsCircleFill
    },{
      id: 13,
      name: 'php',
      level : '80%',
      Icon: BsCircleFill
    },{
      id: 14,
      name: 'Laravel',
      level : '75%',
      Icon: BsCircleFill
    },
]

export const tools:Iskill[] = [
    {
        id: 0,
        name: 'figma',
        level : '95%',
        Icon: BsCircleFill
    },{
        id: 1,
        name: 'adobe photoshop',
        level : '90%',
        Icon: BsCircleFill
    },{
        id: 2,
        name: 'adobe Illustrator',
        level : '80%',
        Icon: BsCircleFill
    },{
        id: 3,
        name: 'xd /psd',
        level : '90%',
        Icon: BsCircleFill
    },{
      id: 4,
      name: 'jpg /jpeg/ png',
      level : '90%',
      Icon: BsCircleFill
  },
];


export const projects: IProject[] = [
    { 
      id:0,
      name: "RADY TRAK",
      description:
        "This app shows a statistical view about corona virus over the world",
      image_path: "/images/1.jpg",
      deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
      github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"],
    },
    { 
      id:1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
      image_path: "/images/1.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
    {
        id:2,
      name: "Algorithm Visualizer",
      image_path: "/images/1.jpg",
      deployed_url: "https://visual-algorithm.web.app/",
      github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
      category: ["react"],
      description:
        "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
      key_techs: ["React", "firebase", "Framer Motion"],
    },
  
    {
        id:3,
      name: "Dev Talks",
      image_path: "/images/1.jpg",
      deployed_url: "https://dev-talks.herokuapp.com/",
      github_url: "https://github.com/Dey-Sumit/Dev-talks",
      category: ["node", "mongodb", "react"],
      description:
        "Social Media app for developers who can share project,create posts,etc...",
      key_techs: [
        "React",
        "Redux",
        "Node",
        "Express",
        "Mongo",
        "REST API",
        "Bootstrap",
      ],
    },
  
    {
        id:4,
      name: "Realtime Chat App",
      image_path: "/images/1.jpg",
      deployed_url: "https://sumit-chat.netlify.app/",
      github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
      category: ["node", "react"],
      description:
        "Basic Realtime Chat App where one can create a room can talk to each other",
      key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },
  
    {
        id:5,
      name: "Tweeter Clone",
      image_path: "/images/1.jpg",
      deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
      github_url: "https://github.com/Dey-Sumit/tweetme",
      category: ["react"],
      description:
        "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
      key_techs: ["React", "Django", "Django REST API"],
    },
  
    {
        id:6,
      name: "Color Classification using tf.js",
      image_path: "/images/1.jpg",
      deployed_url: "!#",
      github_url: "https://github.com/Dey-Sumit/color-classification",
      category: ["express"],
      description:
        "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
      key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        id:7,
      name: "YouTube using YouTube ",
      image_path: "/images/1.jpg",
      deployed_url: "https://not-utube.web.app/",
      github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
      category: ["express"],
      description:
        'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
      key_techs: [
        "React",
        "Redux",
        "Firebase Auth",
        "YouTube API",
        "Sass",
        "Bootstrap",
      ],
    },
    {
        id:8,
      name: "Football App",
      image_path: "/images/1.jpg",
      deployed_url: "https://o-my-goal.web.app/",
      github_url: "https://github.com/Dey-Sumit/football-app",
      category: ["react"],
      description:
        "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
      key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];