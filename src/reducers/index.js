import {combineReducers} from 'redux'

import spells from './spells'
import abilities from './abilities'

const appReducer = combineReducers({
  spells,
  abilities
})

export default appReducer