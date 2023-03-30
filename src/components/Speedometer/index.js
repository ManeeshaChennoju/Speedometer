import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    let presentSpeed = speed + 10
    if (presentSpeed > 200) {
      presentSpeed = 200
    }
    this.setState({speed: presentSpeed})
  }

  applyBrake = () => {
    const {speed} = this.state
    let presentSpeed = speed - 10
    if (presentSpeed < 0) {
      presentSpeed = 0
    }
    this.setState({speed: presentSpeed})
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="heading">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn_container">
          <button className="button1" onClick={this.onAccelerate} type="button">
            Accelerate
          </button>
          <button className="button" onClick={this.applyBrake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
