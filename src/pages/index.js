// this component refers to the main index route component
// thi


import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingPage from "../components/LandingPage"
import {NavbarContextProvider} from "../store/NavbarContext"
export const IndexRoute = () => (
  <NavbarContextProvider>
    <Layout>
      <LandingPage />
    </Layout>
  </NavbarContextProvider>
)

export const Head = () => <Seo title="Home" />

export default IndexRoute
