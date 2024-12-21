import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingPage from "../components/LandingPage"
import {NavbarContextProvider} from "../store/NavbarContext"
export const AboutRoute = () => (
  <NavbarContextProvider>
    <Layout>
      <LandingPage />
    </Layout>
  </NavbarContextProvider>
)

export const Head = () => <Seo title="About" />

export default AboutRoute
