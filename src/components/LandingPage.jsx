import React from "react"

import MediaIcon from "./MediaIcon"
import OverviewArticle from "./OverviewArticle"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query MarkdownFiles {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              description
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <div className="main-page-container">
      <div className="landing-page flex flex-col space-y-4 max-w-2xl">
        <div className="profile-container">
          <StaticImage
            className="w-16 rounded-full border border-gray-200 shadow-sm"
            alt="Profile Image"
            placeholder="blurred"
            src="../images/profile.jpg"
          />
        </div>

        <div className="heading text-4xl md:text-5xl font-bold dark:text-white">
          Software designer, founder, and amateur astronaut.
        </div>

        <div className="">
          <p className="dark:text-gray-500">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>

        <div className="social-media-icons-container flex space-x-5">
          <MediaIcon class="fa-brands fa-github" link="#" />
          <MediaIcon class="fa-brands fa-linkedin" link="#" />
          <MediaIcon class="fa-brands fa-instagram" link="#" />
          <MediaIcon class="fa-brands fa-x-twitter" link="#" />
        </div>
      </div>

      <div className="second-section -ml-[23%] sm:-ml-[20%] my-20 flex w-[500%]">
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <StaticImage
            src="../images/l-page1.png"
            imgClassName="h-[80%] w-[120%] object-cover rounded-3xl"
            alt="landing-page-1"
            placeholder="blurred"
          />
        </div>
        <div className="image-holder -rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <StaticImage
            src="../images/l-page2.png"
            imgClassName="h-[80%] w-[120%] object-cover rounded-3xl"
            alt="landing-page-2"
            placeholder="blurred"
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <StaticImage
            src="../images/l-page3.png"
            imgClassName="h-[80%] w-[120%] object-cover rounded-3xl"
            alt="landing-page-3"
            placeholder="blurred"
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <StaticImage
            src="../images/l-page4.png"
            imgClassName="h-[80%] w-[120%] object-cover rounded-3xl"
            alt="landing-page-4"
            placeholder="blurred"
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <StaticImage
            src="../images/l-page5.png"
            imgClassName="h-[100%] w-[120%] object-cover rounded-3xl"
            alt="landing-page-5"
            placeholder="blurred"
          />
        </div>
      </div>

      <div className="third-section flex md:flex-row flex-col my-20">
        <div className="left flex flex-col w-[100%]">
          {data.allMarkdownRemark.edges.map((value, index) => {
            return (
              <OverviewArticle
                key={index}
                date={value.node.frontmatter.date}
                title={value.node.frontmatter.title}
                description={value.node.frontmatter.description}
              />
            )
          })}

          {/* <OverviewArticle />
          <OverviewArticle />
          <OverviewArticle /> */}
        </div>

        <div className="right flex flex-col w-[100%] my-5 lg:pl-32 px-4 py-0">
          <div className="contact-card p-5 border dark:border-gray-700 rounded-lg">
            <span className="flex gap-2 items-center text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-sm text-stone-900 dark:text-gray-50">
                Stay up to date
              </h3>
            </span>
            <p className="text-stone-400 dark:text-stone-500 my-3 text-sm">
              Get notified when i publish something new, and unsubscribe at
              anytime.
            </p>
            <div className="contact-card-fields flex gap-4 my-2">
              <input
                className="dark:bg-[#161618] dark:focus:outline-none focus:border-none dark:text-stone-50 dark:border-gray-700 p-2 shadow-sm border w-[84%] rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Email address"
              />
              <button className="bg-black text-sm font-bold  text-white py-3 dark:hover:bg-[#35353a] dark:bg-[#3f3f46] dark:text-stone-50 px-2 rounded-lg">
                Join
              </button>
            </div>
          </div>

          <div className="work-exp p-5 border dark:border-gray-700 rounded-lg my-10">
            <span className="flex gap-2 items-center text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-stone-500 dark:text-stone-100">
                Work
              </h3>
            </span>
            <div className="companies flex flex-col my-3">
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <StaticImage
                      src="../images/company-logo1.png"
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt="company-logo-1"
                      placeholder="blurred"
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>

              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <StaticImage
                      src="../images/company-logo2.png"
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt="company-logo-2"
                      placeholder="blurred"
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <StaticImage
                      src="../images/company-logo3.png"
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt="company-logo-3"
                      placeholder="blurred"
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <StaticImage
                      src="../images/company-logo4.png"
                      className="w-12 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt="company-logo-4"
                      placeholder="blurred"
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <button className="text-sm dark:hover:bg-[#3F3F46] dark:bg-[#303035] dark:border-none dark:text-stone-300 px-4 py-2 w-[100%] border rounded-lg bg-gray-100 font-semibold">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
