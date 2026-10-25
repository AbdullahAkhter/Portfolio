import { FaLightbulb,FaPaintBrush,FaCode,FaReact,FaServer,FaMobileAlt,FaTools,FaArrowCircleRight, FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,} from "react-icons/fa"
import commerce from "./commerce.png"
import fitness from "./fitness.png"
import task from"./task.png"
import portfolio from"./portfolio.png"
import App from "./App.png"

export const aboutInfo = [{
    title: "Innovative",

    description: "I can create unique solutions to complex problems with cutting-edge technologies",
    icon:FaLightbulb


},
{
    icon:FaPaintBrush,
    title: "Design Oriented",
    description: "Beautiful design and user experience are at the heart of everything I create"
},
{   icon:FaCode,
    title: "Clean Code",
    description: "I write maintainable ,efficient code following best practices and methods"
},




]
export const Skill_section=[{Icon:FaReact,
    description:"Building interactive and responsive user interfaces with modern interfaces ",
    skills:["React","vite.js","angular","Typescript"],
    title:"FrontEnd Development"
},
{
    Icon:FaServer,
    description:"creating robust server-based applications with restful APIs",
    skills:["Node js","Express","Django","Laravel"],
    title:"BackEnd Development",
},
{Icon:FaMobileAlt,
 description:"designing and optimizing databases for performance and scaleability",
 skills:["Mongdb","PostgreSQL","My SQL","Firebase"],
 title:"Database Management"
}]
export const project_detail=[{title:"E-commerce Platefrom",description:"A full featured online store with chart,authentication and payment methods",image:commerce,tech:["React","Mongodb","Node.js","Stripe"]},{title:"Task Managment App",description:"A productive application with drag-and-drop functionality and real-time updates",image:task,tech:["Tailwind CSS","React","Firebase"]},
    {title:"Fitness Tracker",description:"A health app for tracking workouts,nutiriton and health matrics",image:fitness,tech:["React","Tailwind CSS","Firebase"]},
    {title:"Web Portfolio",description:"Personal portfolio project to showcase projects,skills and blogs",image:portfolio,tech:["React","Tailwind CSS","Animation"]},
    {title:"Chat App",description:"A chat application featuring group chat emojis and file sharing",image:App,tech:["React","Socket.io","Node.js","Mongodb"]}
    


]
export const Arrow=FaArrowCircleRight
export const experience=[{title:"Senior FrontEnd Developer",company:"TechCorp.Inc", description:"Leading frontend development for enterpries clients with modern frameworks and mentoring junior developers",
    date:"2020-present"
},{title:"Web Developer",company:"Digital Solutions.LLC", description:"Developed and maintained web applcations for various clients,focusing on responsive design and performance optimization",
 date:"2008-2020"
},
{title:"Junior Developer",company:"Startup Ventures", description:"started my career building basic websites and gradually took on more comples projects as I expanded my skill set",
 date:"2008-2020"
}]
export const contact=[{icon:FaMapMarkerAlt,title:"Location",description:"Eminabad,Gujranwala"},
    {icon:FaEnvelope,title:"Email",description:"abdullah.akhter12345678910@gmail.com"},
    {icon:FaPhoneAlt,title:"Phone",description:"03120488194"}
]



