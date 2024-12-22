import React from "react"

// import { createPortal } from "react-dom"
import NavItemContainer from "./NavItemContainer"
import NavItem from "./NavItem"
import { NavbarContext } from "../store/NavbarContext"
import { useContext } from "react"
import Portal from "./Portal"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const { handleModalClick } = useContext(NavbarContext)
  // handleComponentClick
  return (
    <Portal>
      {/* // <nav className="md:hidden bg-[#050505e1] backdrop-blur-sm w-[100%]  z-10 absolute"> */}
      <nav
        onClick={handleModalClick}
        className="md:hidden bg-zinc-800/40 fixed backdrop-blur-sm dark:bg-black/80 opacity-100 w-[100%] z-50 inset-0"
      >
        <div className="inner-navbar-container dark:bg-zinc-900 bg-white w-[95%] mx-auto my-10 rounded-3xl flex flex-col">
          <div className="navigator flex items-center flex-row justify-between px-10 py-5">
            <div>
              <span className="text-sm font-semibold text-stone-700 dark:text-stone-300">
                Navigator
              </span>
            </div>
            <div>
              <span
                className="text-2xl cursor-pointer dark:text-stone-300"
                onClick={event => {
                  event.stopPropagation()
                  handleModalClick()
                }}
              >
                x
              </span>
              {/* <span>
              <FontAwesomeIcon icon="fa-solid fa-xmark" style={{color: "#ffffff",}} />
            </span> */}
            </div>
          </div>
          <NavItemContainer>
            <>
              <NavItem isBottomBorder url="/" heading="Home" />
              <NavItem isBottomBorder url="/articles" heading="Articles" />
              <NavItem isBottomBorder url="/projects" heading="Projects" />
              <NavItem isBottomBorder url="/speaking" heading="Speaking" />
              <NavItem isBottomBorder={false} url="/uses" heading="Uses" />
            </>
          </NavItemContainer>
        </div>
      </nav>
    </Portal>
  )
}
