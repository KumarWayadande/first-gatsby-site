import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {NavbarContextProvider} from "../store/NavbarContext"
import Speaking from "../components/Speaking"
export const SpeakingRoute = () => (
  <NavbarContextProvider>
    <Layout>
      <Speaking />
    </Layout>
  </NavbarContextProvider>
)

export const Head = () => <Seo title="Speaking" />

export default SpeakingRoute
