export function collectExercisesFromWorkouts(workouts) {
  return workouts.reduce((accum, w) => [...accum, ...w.exercises], [])
}

export function countMinutesSpentExercising(exercises) {
  return exercises.reduce((totalTime, e) => {
    if(e.completed) totalTime += e.duration
    return totalTime
  }, 0)
}

export function calculateFavoriteExercise(exercises) {
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

export function calculatePercentCompleted(exercises)  {
  const total = exercises.length
  const completedTotal = exercises.reduce((count, e) => (
    e.completed ? count + 1 : count
  ), 0)

  return (completedTotal / total) * 100
}
