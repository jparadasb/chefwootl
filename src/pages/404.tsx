// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/helpers/seo"

const Timeline: React.FC = () => {
  return (
    <Layout>
      <SEO title="chefwootl" />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Timeline
