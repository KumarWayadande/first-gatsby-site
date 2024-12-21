import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NavbarContextProvider } from "../store/NavbarContext"
import Uses from "../components/Uses"
export const UsesRoute = () => (
  <NavbarContextProvider>
    <Layout>
      <Uses />
    </Layout>
  </NavbarContextProvider>
)

export const Head = () => <Seo title="Uses" />

export default UsesRoute
