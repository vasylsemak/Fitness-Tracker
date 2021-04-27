import axios from 'axios'

const SET_WORKOUTS = 'SET_WORKOUTS'

const setWorkoutsActionCreator = workouts => ({
  type: SET_WORKOUTS,
  payload: workouts
})

export const setWorkoutsThunk = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/workouts')
    dispatch(setWorkoutsActionCreator(data))
  } catch(err) {
    console.log("NO data fetched from /API/WORKOUTS", err)
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
