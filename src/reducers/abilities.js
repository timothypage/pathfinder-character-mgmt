const initialState = {
  base: {
    str: 15,
    dex: 17,
    con: 11,
    int: 20,
    wis: 12,
    cha: 10
  },

  temporaryModifiers: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_TEMPORARY_MODIFIER':
      return {
        ...state,
        temporaryModifiers: {
          ...state.temporaryModifiers,
          [action.ability]: action.score
        }
      }

    default:
      return state
  }
}
