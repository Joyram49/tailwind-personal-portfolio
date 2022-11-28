import React, { useEffect, useState } from "react";
import { articles } from "../data/db";
import Article from "../components/Article";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articlePath, setArticlePath] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("articles")) {
      setArticlePath(true);
    } else {
      setArticlePath(false);
    }
  }, []);
  return (
    <div
      id='articles'
      className='w-full h-auto mt-[46%] xs:mt-[32%] sm:mt-[28%] md:mt-[24%]  lg:mt-[18%] xl:mt-[14%] '
    >
      <div
        className={`w-[100%] h-auto  px-4 sm:px-10  xl:px-24 my-6  pt-20 sm:pt-10`}
      >
        <div className='w-full h-auto flex flex-col justify-start items-start mb-10'>
          <h1 className='mb-6 dark:text-zinc-50 text-stone-800/90 font-bold text-[28px] sm:text-[44px] font-poppins leading-[48px] sm:leading-[62px] tracking-tight sm:max-w-2xl'>
            Writing on software design, company building, and the aerospace
            industry.
          </h1>
          <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-poppins leading-[28px] mb-8'>
            All of my long-form thoughts on programming, leadership, product
            design, and more, collected in chronological order.
          </p>
        </div>
        <div className='md:border-l-[.5px] md:border-zinc-400/10 md:pl-6'>
          {articles.map((article, index) => {
            let temp = article.title.split(" ").splice(0, 5);
            let tempLink = temp.join("-");
            return (
              <div key={article.id}>
                <Link to={`${tempLink}`} state={article}>
                  <Article article={article} articlePath={articlePath} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
