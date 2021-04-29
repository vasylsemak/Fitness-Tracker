import axios from 'axios'

const SET_WORKOUTS = 'SET_WORKOUTS'
// const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
// const REMOVE_EXERCISE = 'REMOVE_EXERCISE'

// Action creators
const setWorkouts = workouts => ({
  type: SET_WORKOUTS,
  payload: workouts
})
// const removeExercise = removed => ({
//   type: REMOVE_EXERCISE,
//   payload: removed
// })


// Thunks
export const setWorkoutsThunk = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/workouts')
    dispatch(setWorkouts(data))
  } catch(err) {
    console.log("NO data fetched from /API/WORKOUTS", err)
  }
}

export const removeExerciseThunk = removeId => async dispatch => {
  try {
    const removed = await axios.delete(`api/exercises/${removeId}`)
    if(removed.status !== 204) {
      console.log('Could not remove!', removed.status)
      return
    }
    const { data } = await axios.get('/api/workouts')
    dispatch(setWorkouts(data))
  } catch (error) {
    console.log('NO Exercise found for removal', err)
  }
}


const initialState = { workouts: [] }

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_WORKOUTS:
      return { ...state, workouts: action.payload }
    default:
      return state
  }
}

export default reducer
