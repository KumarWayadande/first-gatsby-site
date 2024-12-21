import React from "react"
import { Link } from "gatsby"

export default function NavItem(prop) {
  // const { handleModalClick } = useContext(NavbarContext)
  let classes = "py-2.5 mx-5 dark:text-stone-400 font-normal text-stone-700"
  if (prop.isBottomBorder) {
    classes += " border-b-[1px] dark:border-b-stone-800"
  }
  return (
    // <li className={classes}>
    //   <button onClick={handleClick1}>{prop.content}</button>
    // </li>
    <Link to={prop.url}>
      <li className={classes}>{prop.heading}</li>
    </Link>
  )
}
