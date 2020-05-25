import React, { useState, useEffect, useRef } from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"
import * as PIXI from "pixi.js"
import { Sprite, Stage, withApp } from "react-pixi-fiber"

const App = () => {
  const [filters, setFilters] = useState([])
  const { width, height } = useWindowDimensions()
  const displacementRef = useRef(null)

  const OPTIONS = {
    height: height,
    width: width,
    backgroundColor: 0xffffff,
  }

  useEffect(() => {
    const animate = () => {
      if (displacementRef.current) {
        displacementRef.current.x += 3
        displacementRef.current.y += 2
      }

      requestAnimationFrame(animate)
    }

    let displacementFilter

    if (displacementRef.current) {
      displacementFilter = new PIXI.filters.DisplacementFilter(
        displacementRef.current
      )
      displacementRef.current.texture.baseTexture.wrapMode =
        PIXI.WRAP_MODES.REPEAT
      displacementRef.current.scale.x = 6
      displacementRef.current.scale.y = 6
    }

    setFilters(prev => [...prev, displacementFilter])
    animate()
  }, [])

  return (
    <Stage
      options={OPTIONS}
      filters={filters}
      style={{
        // position: `relative`,
        // top: `-10px`,
        transform: `scale(1.02)`,
      }}
    >
      <Sprite
        // texture={PIXI.Texture.from(
        //   "https://static.vecteezy.com/system/resources/previews/000/597/565/large_2x/deep-sea-illustration-background-vector.jpg"
        // )}
        texture={PIXI.Texture.from(
          "https://static.vecteezy.com/system/resources/previews/000/562/105/large_2x/realistic-underwater-background-ocean-deep-water-sea-under-water-level-sun-rays-blue-wave-horizon-water-surface-3d-vector-concept.jpg"
        )}
        // texture={PIXI.Texture.from(
        //   "https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
        // )}
        height={height}
        width={width}
      />

      <Sprite
        texture={PIXI.Texture.from(
          "https://cdna.artstation.com/p/assets/images/images/009/070/412/large/alisha-bannister-sarno-alishabs-clouds.jpg?1516950864"
        )}
        height={height}
        width={width}
        ref={displacementRef}
      />
    </Stage>
  )
}

export default withApp(App)
