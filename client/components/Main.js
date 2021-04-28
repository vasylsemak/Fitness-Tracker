import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Analytics } from './Analytics'
import { ListWorkouts } from './ListWorkouts'
import { setWorkoutsThunk } from '../store/reducer'
import './Main.css'

class DisconectedMain extends Component {
  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {
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
