/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: `background`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      width: `100%`,
      height: `85px`,
      padding: `0 2rem`,
      gridColumn: `1 / span 16`,
    }}
  >
    <div>
      <h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            color: `text`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <nav
      sx={{
        width: `200px`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        sx={{
          color: `text`,
          textDecoration: `none`,
        }}
      >
        Home
      </Link>
      <Link
        to="/blog"
        sx={{
          color: `text`,
          textDecoration: `none`,
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        sx={{
          color: `text`,
          textDecoration: `none`,
        }}
      >
        About
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
