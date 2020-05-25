/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"

import Layout from "../components/layout"
import Ripple from "../components/ripple"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Fragment>
    <Ripple
      sx={{
        position: `absolute`,
        top: `0`,
        left: `0`,
        zIndex: -1,
      }}
    />
    <Layout>
      <Hero />
      <SEO title="Home" />
    </Layout>
  </Fragment>
)

export default IndexPage
