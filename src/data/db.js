import {
  BsEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { TbLink } from "react-icons/tb";

import {
  foodApp,
  home1,
  home2,
  home3,
  home4,
  home5,
  hoobank,
  khanaKhazana,
  mernCRUD,
  portfolio,
  portfolio2,
  restaurant,
  TodoApp,
  video,
  rentyard,
  devcore,
} from "../assets";

export const navLinks = [
  {
    id: "about01",
    name: "about",
  },
  {
    id: "experience",
    name: "experience",
  },
  {
    id: "articles03",
    name: "articles",
  },
  {
    id: "projects04",
    name: "projects",
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
    name: FaXTwitter,
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
    link: "https://github.com/Joyram49",
    count: 2,
  },
  {
    id: "social04",
    name: BsLinkedin,
    content: "Follow on LinkedIn",
    link: "https://www.linkedin.com/in/joy-ram-das-a89893a2/",
    count: 3,
  },
  {
    id: "social05",
    name: BsEnvelopeFill,
    content: "joyram2015@gmail.com",
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
    img: mernCRUD,
    title: "Mern user crud",
    desc: "A full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack. The frontend, developed with React, React Router, Redux Toolkit, and Tailwind CSS, provides a responsive and user-friendly interface. The backend leverages Express.js, Mongoose, and MongoDB for efficient data management, with Node.js handling server-side operations. Includes RESTful APIs and asynchronous error handling for smooth data flow between the client and server. Perfect for understanding the core concepts of full-stack development and state management.",
    gitLink: "https://github.com/Joyram49/mern-crud-basic.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://mern-basic-crud.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project05",
    img: khanaKhazana,
    title: "Khana Khazana",
    desc: "Khana Khazana is a modern, full-stack restaurant web application built with Next.js. It combines a sleek user interface with robust backend functionality using MongoDB and Mongoose. The project features responsive design powered by Tailwind CSS, optimized image handling with plaiceholder, and interactive user experiences enabled by react-toastify and heroicons. Additional functionality includes social sharing via react-share-kit and schema validation using zod.",
    gitLink: "https://github.com/Joyram49/Khana-Khazana.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://khana-khazana-umber.vercel.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project06",
    img: video,
    title: "Video Application",
    desc: "backend technologies. The frontend leverages React for creating dynamic user interfaces and React Router DOM for navigation, while state management is handled by Redux Toolkit. The application fetches and manages data using Axios. The project includes responsive design, dynamic routing for video and channel pages, and functionality to mimic core features of YouTube, such as browsing videos, viewing video details, and exploring related content. This project demonstrates a clean separation between the client and server, making it scalable and adaptable for future enhancements.",
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
    img: hoobank,
    title: "Modern Hoobank Website",
    desc: "Modern Hoobank App is a sleek and responsive web application designed with a focus on modern UI/UX principles. Built using React and powered by Vite for fast development and efficient builds, the app leverages Tailwind CSS for streamlined, utility-first styling. The project is crafted to deliver a seamless and engaging user experience, embodying contemporary design trends for a smart banking interface.",
    gitLink: "https://github.com/Joyram49/modern-hoobank-app-tailwindCss",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://hoobank-modern-app-30.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project08",
    img: restaurant,
    title: "Gericht Restaurant",
    desc: "Gericht Restaurant Website is a dynamic and interactive web application designed to showcase a modern restaurant experience. Built with React, the app incorporates responsive design principles to provide seamless navigation across devices. The use of react-icons enhances the visual appeal with intuitive iconography.",
    gitLink: "https://github.com/Joyram49/Restaurant-Website-GeRicht.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://gericht-restaurant-30.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
  {
    id: "project09",
    img: portfolio2,
    title: "Personal Portfolio - 2",
    desc: "Personal Portfolio is a feature-rich web application designed to showcase creative projects, skills, and achievements. Built with React and styled for modern aesthetics, the portfolio incorporates dynamic animations using framer-motion and intuitive tooltips with react-tooltip. The integration of Sanity CMS, using @sanity/client and @sanity/image-url, allows for easy content management and dynamic image rendering. Enhanced navigation with swiper ensures a smooth user experience.",
    gitLink: "https://github.com/Joyram49/Personal-portfolio-3.git",
    gitLogo: TbLink,
    gitContent: "View on GitHub",
    webLink: "https://personal-portfolio-3.netlify.app/",
    webLogo: FiExternalLink,
    webContent: "Explore Now",
  },
];

export const works = [
  {
    id: "work01",
    img: rentyard,
    title: "Rentyard",
    position: "Junior Frontend Developer",
    period: "July, 2025 - present",
  },
  {
    id: "work02",
    img: devcore,
    title: "Devcore Technologies",
    position: "Frontend Developer (Next.js)",
    period: "January, 2025 - June, 2025",
  },
];

export const experiences = [
  {
    id: "exp01",
    company: "Devcore Technologies",
    position: "Frontend Developer (Next.js)",
    period: "January, 2025 - June, 2025",
    img: devcore,
    projects: [
      {
        id: "project01",
        name: "T3 Stack Rinors E-commerce",
        description:
          "Full-stack e-commerce platform built with T3 stack (Next.js, TypeScript, tRPC, Prisma)",
        technologies: [
          "Next.js 15",
          "TypeScript",
          "tRPC",
          "Prisma",
          "NextAuth",
          "Tailwind CSS",
          "Radix UI",
          "React Hook Form",
          "Zod",
          "AWS S3",
          "Cloudinary",
          "Framer Motion",
          "TanStack Query",
          "TanStack Table",
          "TipTap Editor",
          "Three.js",
          "Stripe",
        ],
        contributions: [
          "Developed responsive and interactive UI components using Radix UI and Tailwind CSS",
          "Implemented complex drag-and-drop functionality using @dnd-kit",
          "Built rich text editor with TipTap for content management",
          "Integrated AWS S3 and Cloudinary for image and file handling",
          "Designed and implemented database structure with Prisma ORM",
          "Created authentication system with NextAuth and role-based access control",
          "Implemented real-time features with tRPC for type-safe API calls",
          "Optimized performance with TanStack Query for data fetching and caching",
          "Added 3D visualizations using Three.js and React Three Fiber",
          "Integrated payment processing with Stripe for e-commerce functionality",
        ],
      },
      {
        id: "project02",
        name: "Joc Analytics (SaaS Dashboard)",
        description:
          "Role-based analytics platform built with the T3 stack for organizations to manage access to embedded Power BI reports. Super Admins provision company Admins, who manage users and attach Power BI documents per organization. Subscription-based access with upgrade/downgrade/cancel flows.",
        technologies: [
          "Next.js 15",
          "TypeScript",
          "tRPC",
          "Drizzle ORM",
          "Supabase",
          "Supabase Auth",
          "Zod",
          "Tailwind CSS",
          "Framer Motion",
          "ShadCN UI",
          "React Hook Form",
          "TanStack Query",
          "TanStack Table",
          "Stripe",
        ],
        contributions: [
          "Implemented multi-tenant RBAC: Super Admin → Company Admin → User with scoped permissions",
          "Modeled organizations, users, memberships, and Power BI document relations using Drizzle ORM",
          "Integrated Supabase Auth for authentication and authorization across apps",
          "Built admin dashboards to add/remove users and attach Power BI docs per organization",
          "Implemented subscription lifecycle (create, upgrade, cancel) and metered limits with Stripe",
          "Created type-safe API procedures with tRPC and end-to-end validation using Zod",
          "Optimized data fetching, caching, and invalidation with TanStack Query",
          "Developed accessible UI using Radix UI components and Tailwind CSS",
        ],
      },
    ],
  },
  {
    id: "exp02",
    company: "Rentyard",
    position: "Junior Frontend Developer",
    period: "July, 2025 - Present",
    img: rentyard,
    projects: [
      {
        id: "project01",
        name: "InfluencerCave",
        description:
          "A marketplace connecting influencers and clients. Influencers create a dedicated page with multiple service packages (e.g., videography tiers). Clients select packages, chat, manage orders, receive deliveries, and pay in-app. Includes influencer and client dashboards, real-time chat, additional work requests, and an admin dashboard overseeing the platform.",
        technologies: [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Tailwind CSS 4",
          "Radix UI",
          "ShadCN UI",
          "React Hook Form",
          "Zod",
          "Redux Toolkit",
          "TanStack Query",
          "Socket.IO",
          "Stripe",
          "Firebase",
          "Day.js",
        ],
        contributions: [
          "Built influencer pages with package management: create, edit, and publish multiple packages per profile",
          "Implemented client flows for package selection, order creation, delivery review, and acceptance",
          "Developed real-time chat using Socket.IO for influencer–client communication within each order",
          "Added ‘additional work’ requests with scoped approvals and incremental payments",
          "Created influencer and client dashboards with analytics, order lists, and status tracking",
          "Integrated Stripe for secure payments, checkout, and post-delivery captures",
          "Implemented forms and validation with React Hook Form and Zod for robust UX",
          "Styled accessible UI with Tailwind CSS, Radix primitives, and ShadCN components",
          "Optimized data fetching and caching with TanStack Query and query invalidation patterns",
          "Implemented media uploads and previews for deliverables and portfolio items",
          "Collaborated on admin dashboard features for platform-wide supervision and moderation",
        ],
      },
      {
        id: "project02",
        name: "RentYard Platform",
        description:
          "Rental platform connecting landlords and tenants with verified listings, secure transactions, and streamlined rental workflows. Focused on trust, safety, and accessibility, enabling owners to list properties and tenants to discover, apply, and communicate seamlessly.",
        technologies: [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Radix UI",
          "ShadCN UI",
          "React Hook Form",
          "Zod",
          "Redux Toolkit",
          "TanStack Query",
          "Stripe",
          "Socket.IO",
          "Leaflet / React Leaflet",
          "Google Maps API",
          "Firebase",
          "dnd-kit",
          "Day.js",
        ],
        contributions: [
          "Implemented responsive listing pages with filters, maps, and rich media galleries",
          "Built landlord flows to create and manage property listings with drag-and-drop media",
          "Added tenant application flows, scheduling, messaging, and status tracking",
          "Integrated geolocation and interactive maps using Leaflet/React Leaflet and Google Maps",
          "Developed real-time chat and notifications for landlord–tenant communication",
          "Integrated Stripe for secure payments and deposit handling",
          "Implemented robust forms and validation with React Hook Form and Zod",
          "Optimized data fetching/caching with TanStack Query and pagination/infinite scroll patterns",
          "Shipped accessible, theme-aware UI using Tailwind CSS, Radix primitives, and ShadCN components",
          "Collaborated on verification flows to improve listing trust and user safety",
        ],
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
    name: "Experience",
  },
  {
    id: "footer04",
    name: "Uses",
  },
];
