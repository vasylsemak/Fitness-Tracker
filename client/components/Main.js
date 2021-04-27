import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Analytics } from './Analytics'
import { ListWorkouts } from './ListWorkouts'
import { setWorkoutsThunk } from '../store/reducer'
import './Main.css'

class DisconectedMain extends Component {
  constructor(props) {
    super(props)
    this.state = { workouts: [] }
  }

  async componentDidMount() {
    try {
      const data = await this.props.fetchWorkouts()
      this.setState(data)
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    // const workouts = this.state.workouts
    console.log("--->", this.state)

    return (
      <div id="main">
        <Analytics />
        <ListWorkouts />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(setWorkoutsThunk())
})

export const Main = connect(null, mapDispatchToProps)(DisconectedMain)
