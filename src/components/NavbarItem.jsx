import { Link } from "gatsby"
import React from "react"

const NavbarItem = prop => {
  return (
    <Link
      to={prop.url}
      className="dark:text-gray-50 dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]"
      // activeClassName="dark:text-gray-50 dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa]"
      // activeClassName="dark:hover:text-[#1fbcaa] nav-item font-semibold text-sm cursor-pointer hover:text-[#1fbcaa] text-[#1fbcaa] dark:text-[#1fbcaa]"
      activeClassName="text-[#1fbcaa] dark:[&&]:text-[#1fbcaa]"
    >
      {prop.heading}
    </Link>
  )
}

export default NavbarItem
