/** @jsx jsx */
import { jsx } from "theme-ui"

const Hero = () => {
  return (
    <div
      sx={{
        height: `calc(100vh - 170px)`,
        padding: `0 2rem`,
        bg: `background`,
        gridColumn: `1 / span 16`,
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <h1
        sx={{
          fontSize: `5rem`,
          margin: `0`,
          width: `70%`,
        }}
      >
        All of your favorite franchises in one place
      </h1>
    </div>
  )
}

export default Hero
