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
            "I can build any type of modern and High Tech website using <b>React.js</b>, <b>Redux</b>, <b>Next.js</b>, <b>TypeScript</b>, <b>Axios</b>, <b>Rest API</b>.",
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
    id:2,
    name: "Javascript Website",
    image_path: "/templates/valentina.PNG",
    deployed_url: "https://musabmahmud.github.io/html/valentina/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/valentina",
    category: ["web design"],
    description: "Upload Image to change moments",
    key_techs: ["html", "css", "sass", "bootstrap", "javascript", "jquery"],
  },
  {
    id:1,
    name: "Website Using Particles",
    image_path: "/templates/keri.PNG",
    deployed_url: "https://musabmahmud.github.io/html/kerri/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/kerri",
    category: ["web design"],
    description: "Particles shows cool animation",
    key_techs: ["html", "css", "sass", "bootstrap", "javascript","jquery","magnific-popup","mean-menu","owl carousel","preloader"],
  },
  {
    id:3,
    name: "Responsive Landing Page",
    image_path: "/templates/sajan.PNG",
    deployed_url: "https://musabmahmud.github.io/html/sajan/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/sajan",
    category: ["web design"],
    description: "Fully Responsive Website",
    key_techs: ["html", "css", "sass", "bootstrap", "js","jquery-ui", "magnific-popup","mean-menu","owl carousel","preloader"],
  },
  {
    id:4,
    name: "Restaurant Website",
    image_path: "/templates/kitchen.PNG",
    deployed_url: "https://musabmahmud.github.io/html/kitchen/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/kitchen",
    category: ["web design"],
    description: "Restaurant Website for attractive clients",
    key_techs: ["html", "css", "sass", "bootstrap", "javascript", "jquery"],
  },
  {
    id:5,
    name: "Full Height Website",
    image_path: "/templates/umair.PNG",
    deployed_url: "https://musabmahmud.github.io/html/umair/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/umair",
    category: ["web design"],
    description: "100% Height, Slide fully web scroll",
    key_techs: ["html", "css", "javascript", "mean-menu"],
  },
  {
    id:6,
    name: "Tobacco Release",
    image_path: "/templates/tobacco.PNG",
    deployed_url: "https://musabmahmud.github.io/html/tobacco/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/tobacco",
    category: ["web design"],
    description: "A Website for THE DEPARTMENT OF HEALTH & FAMILY WELFARE",
    key_techs: ["html", "css", "javascript","animate"],
  },
  {
    id:7,
    name: "Simple Website",
    image_path: "/templates/kitchen.PNG",
    deployed_url: "https://musabmahmud.github.io/html/jute_mill/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/tobacco",
    category: ["web design"],
    description: "A Website for THE DEPARTMENT OF Food",
    key_techs: ["html", "css", "javascript", "Fade Animation"],
  },
  {
    id:8,
    name: "Animated Website",
    image_path: "/templates/jute_mill.PNG",
    deployed_url: "https://musabmahmud.github.io/html/jute_mill/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/jute_mill",
    category: ["web design"],
    description: "A Responsive Animated Website",
    key_techs: ["html", "css", "sass", "bootstrap", "javascript", "jquery","slider"],
  },
  {
    id:9,
    name: "Ads Based Website",
    image_path: "/templates/ata.PNG",
    deployed_url: "https://musabmahmud.github.io/Simple-Project-Html/index.html",
    github_url: "https://github.com/musabmahmud/Simple-Project-Html",
    category: ["web design"],
    description: "A Simple Ads Based Website",
    key_techs: ["html", "css", "sass", "bootstrap", "javascript", "jquery","slider"],
  },
  {
    id:10,
    name: "Bootstrap Website",
    image_path: "/templates/moyna.PNG",
    deployed_url: "https://musabmahmud.github.io/html/moyna/index.html",
    github_url: "https://github.com/musabmahmud/html/tree/main/moyna",
    category: ["web design"],
    description: "A Responsive Bootstrap Website",
    key_techs: ["html", "css", "sass", "bootstrap", "javascript","jquery-ui","magnific-popup","mean-menu","owl carousel","preloader"]
  },
  {
    id:11,
    name: "Json Data Fetch",
    image_path: "/templates/json.PNG",
    deployed_url: "https://musabmahmud.github.io/javascript/Json/json.html",
    github_url: "https://github.com/musabmahmud/javascript/tree/main/Json",
    category: ["js"],
    description: "A Responsive Bootstrap Website",
    key_techs: ["HTML","CSS","Js"]
  },
  {
    id:12,
    name: "Calculator",
    image_path: "/templates/calculator.PNG",
    deployed_url: "https://musabmahmud.github.io/javascript/calculator/index.html",
    github_url: "https://github.com/musabmahmud/javascript/tree/main/calculator",
    category: ["js"],
    description: "A Responsive Bootstrap Website",
    key_techs: ["HTML","CSS","Js"]
  },
  {
    id:13,
    name: "Cart handle(Js)",
    image_path: "/templates/pin-matcher.PNG",
    deployed_url: "https://musabmahmud.github.io/javascript/pin-matcher/index.html",
    github_url: "https://github.com/musabmahmud/javascript/tree/main/pin-matcher",
    category: ["js"],
    description: "A Responsive Bootstrap Website",
    key_techs: ["HTML","CSS","Js"]
  }
];