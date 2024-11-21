/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <div className="dark:bg-black full-width-container w-[100%] overflow-hidden selection:bg-[#1fbcaa] selection:text-white">
        <div className="container bg-white dark:bg-[#18181b] max-w-7xl mx-auto md:px-20 px-6  h-max-full inset-0 py-2">
          {/* <TopNavbarContainer /> */}
          {children}
          {/* Middle data page */}
          {/* <Outlet /> outlet component renders all the child components */}
          {/* <FooterNavbarContainer footerCopyRightText={footerCopyRightText} /> */}
          {/* End of this section */}
        </div>
      </div>
    </>
  )
}

export default Layout
