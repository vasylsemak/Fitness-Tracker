import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeExerciseThunk, toggleCompleteThunk } from '../store/reducer'
import './SingleExercise.css'

const SingleExerciseDisconnected = props => {
  const { id, name, duration, completed, description } = props.exercise
  const { toggleComplete, removeExercise } = props

  return (
    <Fragment>
      <div className="exercise-name">
        <div>
          <i
            id={`exercise-${id}`}
            className={
              completed
                ? 'toggle-complete fas fa-check-circle'
                : 'toggle-complete far fa-circle'
            }
            onClick={() => toggleComplete(id, !completed)}
          />
          <i className="fas fa-trash" onClick={() => removeExercise(id)} />
        </div>
        <h3>{name}</h3>
        <span>{duration} min</span>
      </div>
      <div>{description}</div>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  removeExercise: id => dispatch(removeExerciseThunk(id)),
  toggleComplete: (id, status) => dispatch(toggleCompleteThunk(id, status))
})

export const SingleExercise = connect(
  null,
  mapDispatchToProps
)(SingleExerciseDisconnected)
