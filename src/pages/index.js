// this component refers to the main index route component

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingPage from "../components/LandingPage"
import { NavbarContextProvider } from "../store/NavbarContext"
export const IndexRoute = props => {
  return (
    <NavbarContextProvider>
      <Layout>
        <LandingPage />
      </Layout>
    </NavbarContextProvider>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexRoute
