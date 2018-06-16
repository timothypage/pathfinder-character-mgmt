import React from 'react'
import _ from 'lodash'

import SpellGroup from './SpellGroup'

import spells from '../db/spells.json'

const spell_groups = _.groupBy(spells, 'level')

const Spells = ({castSpell, dailySpellCountPerLevel}) => (
  <div className="spell-list">
    {_.map(spell_groups, (spells, level) => (
      <SpellGroup 
        level={level} 
        spells={spells} 
        castSpell={castSpell} 
        key={level}
        spellCount={dailySpellCountPerLevel[level]}
      />
    ))}
  </div>
)

export default Spells
