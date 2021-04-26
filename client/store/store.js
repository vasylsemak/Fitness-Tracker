const SET_WORKOUTS = 'SET_WORKOUTS'

export const setWorkoutsActionCreator = workouts => ({
  type: SET_WORKOUTS,
  payload: workouts
})

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
