import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Experience from "./pages/Experience";
import Uses from "./pages/Uses";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className='w-full h-auto bg-zinc-50 dark:bg-black flex items-start justify-center  overflow-hidden'>
      <div className='w-full h-full mx-0 sm:max-w-[92%] lg:max-w-[88%] xxl:max-w-[1240px] bg-white dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-300/20 '>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:article' element={<ArticlePage />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/uses' element={<Uses />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
