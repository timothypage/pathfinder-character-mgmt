import React from 'react'
import _ from 'lodash'

const SpellGroup = ({level, spells, castSpell, spellCount}) => (
	<React.Fragment>
	<h4>{level}-level Spells <span className="spell-count-left">({spellCount} {spellCount === 1 ? 'spell' : 'spells'} left)</span></h4>
  <div>
    <div className="spell label">
      <div className="spell-name">Name</div>
      <div className="spell-dmg">Dmg</div>
    </div>

      {_.sortBy(spells, 'name').map(spell => (
      <div className="spell item" key={spell.name}>
        <div className="spell-name">{spell.name}</div>
        <div className="spell-dmg"></div>
        <div className="spell-action">{spellCount > 0 ? <span className="action" onClick={() => castSpell(level)}>Cast</span> : null}</div>
      </div>
      ))}
  </div>
	</React.Fragment>
)

export default SpellGroup