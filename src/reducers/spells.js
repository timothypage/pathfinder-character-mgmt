const initialState = {
  0: 4, 
  1: 4
}
export default (state = initialState, action) => {
  switch(action.type) {
    case 'CAST_SPELL':
      return {
        ...state,
        [action.level]: state[action.level] === 0 ? 0 : state[action.level] - 1
      }

    case 'SLEEP':
      return {
        ...initialState
      }

    default:
      return state
  }
}