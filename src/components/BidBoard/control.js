import React from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

class Control extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.min,
    }
  }

  handleChange = value => {
    this.setState({ value })
    this.props.onUpdate(value)
  }

  render() {
    const { title, min, max, step } = this.props
    const { value } = this.state
    return (
      <div
        style={{
          margin: `1rem`,
          maxWidth: 175,
          padding: "1rem",
        }}
      >
        <div style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
          {value}
        </div>
        <div style={{ textAlign: "center" }}>{title}</div>
        <div>
          <Slider
            min={min}
            max={max}
            defaultValue={min}
            step={step}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default Control
