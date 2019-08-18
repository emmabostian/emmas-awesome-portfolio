import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout"
import BlogSquare from "../components/blogSquare";

const WritingPage = ({ data }) => (
    <Layout>
        <h1>Writing Page</h1>
        {data.allMarkdownRemark.edges.map(post => (
        <BlogSquare key={post.node.id} title={post.node.frontmatter.title} date={post.node.frontmatter.date} description={post.node.frontmatter.description} path={post.node.frontmatter.path} />        
      ))}
    </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            author
            date
            description
          }
        }
      }
    }
  }
`

export default WritingPage;