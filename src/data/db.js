import {
  BsEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { TbLink } from "react-icons/tb";

import {
  airbnb,
  ExpenseTracker,
  facebook,
  foodApp,
  home1,
  home2,
  home3,
  home4,
  home5,
  planetaria,
  portfolio,
  quiz,
  starbucks,
  tailwind,
  TodoApp,
  video,
} from "../assets";

export const navLinks = [
  {
    id: "about01",
    name: "about",
  },
  {
    id: "articles02",
    name: "articles",
  },
  {
    id: "projects03",
    name: "projects",
  },
  {
    id: "speaking04",
    name: "speaking",
  },
  {
    id: "uses05",
    name: "uses",
  },
];

export const heroImgs = [
  {
    id: "heroImg01",
    name: home1,
  },
  {
    id: "heroImg02",
    name: home2,
  },
  {
    id: "heroImg03",
    name: home3,
  },
  {
    id: "heroImg04",
    name: home4,
  },
  {
    id: "heroImg05",
    name: home5,
  },
];

export const socialLinks = [
  {
    id: "social01",
    name: BsTwitter,
    content: "Follow on Twitter",
    link: "https://www.twitter.com",
    count: 0,
  },
  {
    id: "social02",
    name: BsInstagram,
    content: "Follow on Instagram",
    link: "https://www.instagram.com",
    count: 1,
  },
  {
    id: "social03",
    name: BsGithub,
    content: "Follow on GitHub",
    link: "https://www.github.com",
    count: 2,
  },
  {
    id: "social04",
    name: BsLinkedin,
    content: "Follow on LinkedIn",
    link: "https://www.linkedin.com",
    count: 3,
  },
  {
    id: "social05",
    name: BsEnvelopeFill,
    content: "353224joy@mail.com",
    link: "https://www.google.com",
    count: 4,
  },
];

export const articles = [
  {
    id: "article01",
    date: "September 5, 2022",
    title: "Crafting a design system for a multiplanetary future",
    content:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    more: "Read article",
  },
  {
    id: "article02",
    date: "September 2, 2022",
    title: "Introducing Animaginary: High performance web animations",
    content:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    more: "Read article",
  },
  {
    id: "article03",
    date: "July 14, 2022",
    title: "Rewriting the cosmOS kernel in Rust",
    content:
      "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    more: "Read article",
  },
];

export const projects = [
  {
    id: "project01",
    img: foodApp,
    title: "Khuda Lagche",
    desc: "Developed a dynamic and fully responsive food ordering website using Next.js and Tailwind CSS. Integrated advanced features like user authentication (NextAuth), real-time state management (React Hook Form), and Stripe for payment processing. Enhanced user experience with Radix UI components, Leaflet for interactive maps, and animations via Framer.",
    gitLink: "https://github.com/Joyram49/khuda-lagche.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://khuda-lagche-lbld.vercel.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project02",
    img: portfolio,
    title: "Personal portfolio",
    desc: "I've developed a fully responsive portfolio using React.js, HTML, and CSS, with Framer Motion for smooth animations and transitions. This portfolio elegantly showcases my work, with an intuitive design that adapts seamlessly to all screen sizes for an engaging user experience.",
    gitLink: "https://github.com/Joyram49/personal-portfolio-final.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://personal-portfolio-final-30.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project03",
    img: TodoApp,
    title: "Todo application with rtk query",
    desc: "This project is a Todo List Application built using React and Redux Toolkit (RTK Query) to manage state and handle asynchronous data fetching. The application is connected to a JSON Server that acts as a mock backend, providing RESTful APIs for CRUD operations on todo items.",
    gitLink:
      "https://github.com/Joyram49/About-advanced-todo-application-with-rtk-query.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://todo-app-with-rtk.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project04",
    img: ExpenseTracker,
    title: "Mern Expense Tracker",
    desc: "This is a full-stack Expense Tracker Application built using the MERN stack, which includes MongoDB, Express, React, and Node.js. The app allows users to track their income and expenses in real-time and visualize their spending patterns using charts. The backend handles data storage and API routes, while the frontend manages the user interface and state.",
    gitLink: "https://github.com/Joyram49/mern-expense-tracker-client.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://mern-expense-tracker30.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project05",
    img: quiz,
    title: "Quiz Application",
    desc: "Quiz application with react hooks and firebase, html, css etc",
    gitLink: "https://github.com/Joyram49/React-Quiz-App",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://react-quiz-app30.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project06",
    img: video,
    title: "Video Application",
    desc: "backend technologies. The frontend leverages React for creating dynamic user interfaces and React Router DOM for navigation, while state management is handled by Redux Toolkit. The application fetches and manages data using Axios, interacting with a lightweight backend powered by the LWS JSON Server, which serves as the mock API for videos, channels, and related data. The project includes responsive design, dynamic routing for video and channel pages, and functionality to mimic core features of YouTube, such as browsing videos, viewing video details, and exploring related content. This project demonstrates a clean separation between the client and server, making it scalable and adaptable for future enhancements.",
    gitLink:
      "https://github.com/Learn-with-Sumit/assignment-6---add-features-to-video-website-Joyram49",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://video-website-redux.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project07",
    img: tailwind,
    title: "Modern Hoobank Website",
    desc: "A complete tailwind css 3 website.",
    gitLink: "https://github.com/Joyram49/modern-hoobank-app-tailwindCss",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://hoobank-modern-app-30.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
];

export const works = [
  {
    id: "work01",
    img: planetaria,
    title: "Planeteria",
    position: "CEO",
    period: "2019 - present",
  },
  {
    id: "work02",
    img: airbnb,
    title: "Airbnb",
    position: "Product Designer",
    period: "2014 - 2019",
  },
  {
    id: "work03",
    img: facebook,
    title: "Facebook",
    position: "iOS Software Engineer",
    period: "2011 - 2014",
  },
  {
    id: "work04",
    img: starbucks,
    title: "Starbucks",
    position: "Shift Supervisor",
    period: "2008 - 2011",
  },
];

export const speaking = [
  {
    id: "speaking01",
    type: "Conferences",
    topics: [
      {
        id: "topics01",
        date: "SysConf 2021",
        title: "In space, no one can watch you - until now",
        content:
          "A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.",
        more: "Watch video >",
      },
      {
        id: "topics02",
        date: "Business of Startups 2020",
        title: "Lessons learned from our first product recall",
        content:
          "The say that if you're not embarassed by your first version, you're doing it wrong. Well when you're selling DIY space shuttle kits it turns out it's a bit more complicated",
        more: "Watch video >",
      },
    ],
  },
  {
    id: "speaking02",
    type: "Podcasts",
    topics: [
      {
        id: "topics01",
        date: "Encoding Design, july 2022",
        title: "Using design as a competetive advantage",
        content:
          "How we used world-class visual design to attract a great team, win over custiomers, and get more press for Planetaria",
        more: "Listen to Podcast >",
      },
      {
        id: "topics02",
        date: "The Escape Velocity Show, March 2022",
        title: "Bootstrapping an aerospace company to $17M ARR",
        content:
          "The story of how we built one of the most promising space startups in the world without taking any capital from investors",
        more: "Listen to Podcast >",
      },
      {
        id: "topics03",
        date: "How They Work Radio, September 2021",
        title: "Programming your company operating system",
        content:
          "On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation",
        more: "Listen to Podcast >",
      },
    ],
  },
];

export const uses = [
  {
    id: "uses01",
    type: "WorkStation",
    topics: [
      {
        id: "topics01",
        title: "16 inch MacBook Pro, M1 Max, 64GB RAM (2021)",
        content:
          "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
      },
      {
        id: "topics02",
        title: "Apple Pro Display XDR (Standard Glass)",
        content:
          "The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.",
      },
      {
        id: "topics03",
        title: "IBM Model M SSK Industrial Keyboard",
        content:
          "They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.",
      },
      {
        id: "topics04",
        title: "IApple Magic Trackpad",
        content:
          "Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.",
      },
      {
        id: "topics05",
        title: "Herman Miller Aeron Chair",
        content:
          "If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.",
      },
    ],
  },
  {
    id: "uses02",
    type: "Development tools",
    topics: [
      {
        id: "topics01",
        title: "Sublime Text 4",
        content:
          "I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.",
      },
      {
        id: "topics02",
        title: "iTerm2",
        content:
          "I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use",
      },
      {
        id: "topics03",
        title: "TablePlus",
        content:
          "Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.",
      },
    ],
  },
  {
    id: "uses03",
    type: "Design",
    topics: [
      {
        id: "topics01",
        title: "Figma",
        content:
          "We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.",
      },
    ],
  },
  {
    id: "uses04",
    type: "Productivity",
    topics: [
      {
        id: "topics01",
        title: "Alfred",
        content:
          "It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.",
      },
      {
        id: "topics02",
        title: "Reflect",
        content:
          "Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.",
      },
      {
        id: "topics03",
        title: "SavvyCal",
        content:
          "Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.",
      },
      {
        id: "topics04",
        title: "Focus",
        content:
          "Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.",
      },
    ],
  },
];

export const footerLinks = [
  {
    id: "footer01",
    name: "about",
  },
  {
    id: "footer02",
    name: "projects",
  },
  {
    id: "footer03",
    name: "Speaking",
  },
  {
    id: "footer04",
    name: "Uses",
  },
];
