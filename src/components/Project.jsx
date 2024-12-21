import React from 'react';
import ProjectLink from './ProjectLink';
import { StaticImage } from 'gatsby-plugin-image';
const Project = (prop) => {
  const imgUrl = prop.projectLogo;
  return (
    <div className="box1 group flex flex-col pl-3 pr-20 py-2 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#252529] cursor-pointer">
      <span className="rounded-3x">
        <StaticImage
          src="../images/company-logo1.png"
          imgClassName="w-18 rounded-3xl border-white border-4 shadow-lg my-3 dark:border-[#252529]"
          alt="Project Logo"
        />
      </span>
      <h1 className="font-semibold my-2 dark:text-gray-200">{prop.projectHeader}</h1>
      <p className="text-stone-500 text-sm my-2 dark:text-gray-500">
        {prop.projectDescription}
      </p>
      <ProjectLink buttonText={prop.buttonText} projectLink={prop.projectLink} />
    </div>
  );
};


export default Project;