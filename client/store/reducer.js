import axios from 'axios'

const SET_WORKOUTS = 'SET_WORKOUTS'
const REMOVE_EXERCISE = 'REMOVE_EXERCISE'
// const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

// Action creators
const setWorkouts = workouts => ({
  type: SET_WORKOUTS,
  payload: workouts
})

const removeExercise = id => ({
  type: REMOVE_EXERCISE,
  id
})


//      Thunks       -----------------------
export const setWorkoutsThunk = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/workouts')
    dispatch(setWorkouts(data))
  } catch(err) {
    console.log("NO data fetched from /API/WORKOUTS", err)
  }
}

export const removeExerciseThunk = id => async dispatch => {
  try {
    const removed = await axios.delete(`api/exercises/${id}`)
    if(removed.status !== 204) return
    dispatch(removeExercise(id))
  } catch (err) {
    console.log('NO Exercise found for removal', err)
  }
}


const initialState = { workouts: [] }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_WORKOUTS:
      return { ...state, workouts: action.payload }

    case REMOVE_EXERCISE:
      const updated = state.workouts.map(workout => {
        if(workout.exercises.find(e => e.id === action.id)) {
          const updatedE = workout.exercises.filter(e => e.id !== action.id)
          return { ...workout, exercises: updatedE }
        } else return workout
      })
      return { ...state, workouts: updated }

    default:
      return state
  }
}

export default reducer
