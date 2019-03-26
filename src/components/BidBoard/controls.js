import React from "react"
import Control from "./control"
import boardOptions from "./boardOptions"

const Controls = ({ onUpdate }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      display: "flex",
      flex: 1,
      flexDirection: "row",
    }}
  >
    {boardOptions.map(({ title, step, min, max, key }) => {
      return (
        <Control
          key={key}
          title={title}
          min={min}
          max={max}
          step={step}
          onUpdate={value => {
            onUpdate({ value, key })
          }}
        />
      )
    })}
  </div>
)

export default Controls
