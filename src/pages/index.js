import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Emma Wedekind" />
    <h1>I'm Emma</h1>
    <h2>{`&& I'm a Software Engineer.`}</h2>

    <h3>Who I am</h3>
    <p>This is random text about who I am. I'm a super cool person, in case you didn't know.</p>

    <h3>What I do</h3>
    <p>This is random text about what I do. I do a lot of things.</p>
    
  </Layout>
)

export default IndexPage
