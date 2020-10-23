// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/helpers/seo"
import { totalmem } from "os"
import { title } from "process"

import "./index.scss"
import { format } from "prettier"

type Article = {
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
    edges: {
      edges: Array<Article>
    }
  }
}

const Timeline: React.FC<PageProps<DataProps>> = ({
  data: { allRestApiTimelines: {edges: edges} },
  path,
}) => {
  return (
    <Layout type="clean">
      <SEO title="Using TypeScript" />
      <ul className="timeline">
        {renderTimeRow(edges)}
      </ul>
    </Layout>
  )
}

const renderTimeRow = (rows: Array<Article>): Array<JSX.Element> => rows.map((edge: Article) => <TimeRow key={edge.node.id} {...edge} />)

const dateFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
};

const formatDate = (date: String): String => {
  return new Intl.DateTimeFormat('en', dateFormatOptions).format(new Date(date))
}


const TimeRow: React.FC<Article> = ({
  node: {
    Content: content, Title: title, created_at, id, image_src, updated_at, updated_by: {
      firstname: first_name, lastname: last_name
    }
  },
}) => {
  return (
    <li key={`li_${id}`} className="timeline__item">
      <div className="timeline__content arrow arrow-down">
        <h3>
          {title}
        </h3>
        <p>
          {content}
        </p>
        <aside>
          {formatDate(created_at)}
        </aside>
      </div>
      <div className="timeline__data-point">
        <img src="https://picsum.photos/200" alt={title} />
      </div>
    </li>
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
