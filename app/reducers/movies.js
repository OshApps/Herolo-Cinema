
export const SET_MOVIES_ACTION="SET_MOVIES"

export default (state = [], action)=> {

  switch (action.type) {
    
    case SET_MOVIES_ACTION:
      return action.movies || []

    default:
      return state
  }
}