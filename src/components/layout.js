/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      sx={{
        position: `absolute`,
        top: `0`,
        left: `0`,
        right: `0`,
        display: `grid`,
        gridTemplateColumns: `repeat(16, 1fr)`,
        gridColumnGap: `4.8rem`,
        width: `calc(-28.8rem + 100vw)`,
        margin: `0 auto`,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />

      <main
        sx={{
          gridColumn: `1 / span 16`,
        }}
      >
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
