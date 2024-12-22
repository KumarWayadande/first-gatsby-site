import React from "react"
import ProjectLink from "./ProjectLink"
import { StaticImage } from "gatsby-plugin-image"
const Project = prop => {
  const listOfImages = [
    "../images/company-logo1.png",
    "../images/company-logo2.png",
    "../images/company-logo3.png",
    "../images/company-logo4.png",
  ]

  let url = listOfImages[prop.projectIndex]

  return (
    <div className="box1 hover:duration-200 group flex flex-col pl-6 pr-16 py-6 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#252529] cursor-pointer">
      <span className="rounded-3x">
        <StaticImage
          src="../images/company-logo1.png"
          imgClassName="rounded-3xl border-white border-2 shadow-lg my-6 dark:border-[#252529]"
          alt="Project Logo"
          placeholder="blurred"
        />
      </span>
      <h1 className="font-semibold my-2 dark:text-gray-200 line-clamp-1">
        {prop.projectHeader}
      </h1>
      <p className="text-stone-500 text-sm my-2 dark:text-gray-500 line-clamp-3">
        {prop.projectDescription}
      </p>
      <ProjectLink
        buttonText={prop.buttonText}
        projectLink={prop.projectLink}
      />
    </div>
  )
}

export default Project
