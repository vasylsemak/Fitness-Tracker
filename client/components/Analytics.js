import React from 'react'
import { useSelector } from 'react-redux'
import './Analytics.css'


function collectExercisesFromWorkouts(workouts) {
  return workouts.reduce((accum, w) => [...accum, ...w.exercises], [])
}

function countMinutesSpentExercising(exercises) {
  return exercises.reduce((totalTime, e) => {
    if(e.completed) totalTime += e.duration
    return totalTime
  }, 0)
}

function calculateFavoriteExercise(exercises) {
  const totalExMap = {}
  let longerTime = 0
  let favouriteExercise = ''

  exercises.forEach(e =>
    !totalExMap[e.name] && e.completed
      ? totalExMap[e.name] = e.duration
      : totalExMap[e.name] += e.duration)

  for(let name in totalExMap) {
    if(totalExMap[name] > longerTime) {
      longerTime = totalExMap[name]
      favouriteExercise = name
    }
  }

  return favouriteExercise
}


// const calculatePercentCompleted = exercises => {
//   const total = exercises.length
//   const completedTotal = exercises.reduce((count, e) => (
//     e.completed ? count++ : count
//   ), 0)

//   return (completedTotal / total) * 100
// }


export const Analytics = () => {
  const workouts = useSelector(state => state.workouts)
  const exercises = collectExercisesFromWorkouts(workouts)
  const totalMinutes = countMinutesSpentExercising(exercises)
  const favouriteExercise = calculateFavoriteExercise(exercises)

  // console.log('--->', favouriteExercise)

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
                <td id="percentage-completed">75%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
