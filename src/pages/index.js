import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1 className="text-lg">Home Page</h1>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
