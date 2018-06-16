import {connect} from 'react-redux'
import Spells from './Spells'

import {
  castSpell
} from '../actions/spells'

const mapStateToProps = (state, ownProps) => {
  return {
    dailySpellCountPerLevel: state.spells
  }
}

const mapDispatchToProps = {
  castSpell
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells)

