// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Articles = {
  node: {
    Content: string
    Title: string
    created_at: string
    id: string
    image_src: string
    updated_at: string
    updated_by: {
      firstname: string
      id: string
      lastname: string
    }
    created_by: {
      firstname: string
      id: string
      lastname: string
    }
  }
}

type DataProps = {
  allRestApiTimelines: {
    edges: Array<Articles>
  }
}

const Timeline: React.FC<PageProps<DataProps>> = ({
  data: { allRestApiTimelines: edges },
  path,
}) => {
  return (
    <Layout>
      <SEO title="Using TypeScript" />
      <h1>Timeline</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Timeline

export const query = graphql`
  {
    allRestApiTimelines {
      edges {
        node {
          Content
          Title
          created_at
          id
          image_src
          updated_at
          updated_by {
            firstname
            id
            lastname
          }
          created_by {
            firstname
            id
            lastname
          }
        }
      }
    }
  }
`
