import React from "react"

import Article from "./Article"
import Heading from "./Heading"
import HeadingContainer from "./HeadingContainer"
import SubHeading from "./SubHeading"
import Tag from "./Tag"
import { graphql, useStaticQuery } from "gatsby"

const ArticleContainer = () => {
  const tags = ["All", "ReactJS", "Web", "Mumbai's Underbelly"]

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

  return (
    <div className="article-container my-20">
      <HeadingContainer>
        <Heading
          heading="Writing on software design, company building, and the aerospace
          industry."
        />
        <SubHeading
          subHeading="All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order."
        />
      </HeadingContainer>

      {/* <span className="text-stone-500 dark:text-stone-300 text-sm mx-2">
          Tags
        </span> */}
      <div className="tags-container mb-5">
        <p>
          {tags.map((value, index) => {
            return <Tag value={value} key={index} />
          })}
        </p>
      </div>
      <div className="article-card-container flex flex-col md:border-l-[1px] sm:w-[100%] dark:border-gray-700 border-b-gray-50 md:w-[80%] sm:pl-5">
        {/* All articles */}

        {data.allMarkdownRemark.edges.map((value, index) => {
            return (
              <Article
                key={index}
                date={value.node.frontmatter.date}
                title={value.node.frontmatter.title}
                description={value.node.frontmatter.description}
              />
            )
          })}
        {/* End of all articles */}
      </div>
    </div>
  )
}

export default ArticleContainer
