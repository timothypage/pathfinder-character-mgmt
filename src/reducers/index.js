import {combineReducers} from 'redux'

import spells from './spells'

const appReducer = combineReducers({
  spells,
})

export default appReducer