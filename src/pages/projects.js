import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {NavbarContextProvider} from "../store/NavbarContext"
import ProjectContainer from "../components/ProjectContainer"
export const ProjectsRoute = () => (
  <NavbarContextProvider>
    <Layout>
      <ProjectContainer />
    </Layout>
  </NavbarContextProvider>
)

export const Head = () => <Seo title="Projects" />

export default ProjectsRoute
