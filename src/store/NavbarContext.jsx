import React from "react"
import { createContext, useState } from "react"

export const NavbarContext = createContext({
  darkMode: undefined,
  showModal: undefined,
  getDarkModeMenuIcon: () => {},
  darkModeHandler: () => {},
  handleModalClick: () => {},
})

export function NavbarContextProvider({ children }) {
  // Holds dark mode value fetched from localstorage to further use (true or false)
  // true means dark and false means white mode
  const localStorageDarkModeValue =
    localStorage.getItem("darkMode") === "true" ? true : false

  // state for toggling darkmode and white mode
  // localStorageDarkModeValue value defines intial value for this state
  const [darkMode, setDarkMode] = useState(localStorageDarkModeValue)

  const [showModal, setShowModal] = useState(false)

  // Every time state changes this code runs again.
  // As this is the react component, so following codes is executed again
  // It adds "dark" class to the classlist of the entire document
  // Causing page to be dark
  if (darkMode) document.body.classList.add("dark")
  else document.body.classList.remove("dark")

  // Function to save or change value for dark mode in localstorage
  // Also changes state value to make page dark or light
  const darkModeHandler = () => {
    localStorage.setItem("darkMode", !darkMode)
    setDarkMode(prev => !prev)
  }

  const handleModalClick = () => {
    setShowModal(prevValue => !prevValue)
  }

  const getDarkModeMenuIcon = () => {
    let darkModeMenuIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#434343"
      >
        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
      </svg>
    )

    if (darkMode)
      darkModeMenuIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#1fbcaa"
        >
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </svg>
      )

    return darkModeMenuIcon
  }

  const ctxValue = {
    darkMode: darkMode,
    showModal: showModal,
    getDarkModeMenuIcon: getDarkModeMenuIcon,
    darkModeHandler: darkModeHandler,
    handleModalClick: handleModalClick,
  }

  return (
    <NavbarContext.Provider value={ctxValue}>{children}</NavbarContext.Provider>
  )
}
