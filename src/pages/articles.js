import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {NavbarContextProvider} from "../store/NavbarContext"
import ArticleContainer from "../components/ArticleContainer"
export const ArticleRoute = () => (
  <NavbarContextProvider>
    <Layout>
      <ArticleContainer />
    </Layout>
  </NavbarContextProvider>
)

export const Head = () => <Seo title="Articles" />

export default ArticleRoute
