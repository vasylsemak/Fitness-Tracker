import React from 'react'
import { useSelector } from 'react-redux'
import {
  collectExercisesFromWorkouts,
  countMinutesSpentExercising,
  calculateFavoriteExercise,
  calculatePercentCompleted
} from '../helper_functions'

import './Analytics.css'


export const Analytics = () => {
  const workouts = useSelector(state => state.workouts)
  const exercises = collectExercisesFromWorkouts(workouts)
  const totalMinutes = countMinutesSpentExercising(exercises)
  const favouriteExercise = calculateFavoriteExercise(exercises)
  const percentage = calculatePercentCompleted(exercises)

  return (
    <div id="analytics">
      <div className="box">
        <h2 className="box-header">Analytics</h2>
        <div className="box-content">
          <table className="analytics-table">
            <tbody>
              <tr className="analytics-table-row">
                <td className="analytics-name">Total Minutes Exercised:</td>
                <td id="total-exercised">{totalMinutes}</td>
              </tr>
              <tr className="analytics-table-row">
                <td className="analytics-name">Favorite Exercise:</td>
                <td>{favouriteExercise}</td>
              </tr>
              <tr className="analytics-table-row">
                <td className="analytics-name">Percentage Completed:</td>
                <td id="percentage-completed">{percentage}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
