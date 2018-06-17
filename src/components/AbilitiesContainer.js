import {connect} from 'react-redux'

import Abilities from './Abilities'

const mapStateToProps = (state, ownProps) => {
  return {
    abilities: state.abilities
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Abilities)
