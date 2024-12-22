import React from "react"

// Article Component that creates a single article page
// Article Compone
const Article = ({date, title, description}) => {
  return (
    <div className="article-row flex flex-col md:flex-row">
      <div className="text-gray-500 p-2 md:p-7 md:px-0 mt-3 md:w-[200px]">
        <div className="article-row flex flex-col md:flex-row">{date}</div>
      </div>
      <div className="hover:duration-200 mb-8 md:mb-0 md:w-[700px] second-col hover:bg-gray-50 p-2 md:p-7 lg:p-7 rounded-xl dark:hover:bg-[#252529] cursor-pointer">
        <h2 className="font-semibold my-3 dark:text-gray-100 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">
          {description}
        </p>
        <p className="w-fit my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
          Read article &gt;
        </p>
      </div>
    </div>
  )
}

export default Article
