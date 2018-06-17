import React from 'react'

const armor = {
  acBonus: 1
}

const classAbilities = {
  fortitude: 3,
  reflex: 0,
  will: 3
}

const abilityScoreModifiers = {
  8: -1,
  9: -1,
  10: 0,
  11: 0,
  12: 1,
  13: 1,
  14: 2,
  15: 2,
  16: 3,
  17: 3,
  18: 4,
  19: 4,
  20: 5,
  21: 5
}

const Ability = ({name, value, temp}) => (
  <div className="ability">
    <div className="ability-name">{name.toUpperCase()}</div>
    <div className="ability-base">{value}</div>
    <div className="ability-temp-modifier">{temp === undefined ? "-" : temp}</div>
    <div className="ability-total">{abilityScoreModifiers[ value+temp ]}</div>
  </div>
)

const Abilities = ({abilities}) => {
  const fortitude = classAbilities.fortitude + 
                    abilityScoreModifiers[ 
                      abilities.base.con - (abilities.temporaryModifiers.con || 0) 
                    ]

  const reflex = classAbilities.reflex +
                 abilityScoreModifiers[ 
                   abilities.base.dex - (abilities.temporaryModifiers.dex || 0) 
                 ]

  const will = classAbilities.will +
               abilityScoreModifiers[ 
                 abilities.base.wis - (abilities.temporaryModifiers.wis || 0) 
               ]

  const ac = abilityScoreModifiers[ abilities.base.dex - (abilities.temporaryModifiers.dex || 0) ] 

  return (
    <div className="abilities">
      {Object.keys(abilities.base).map(key => (
        <Ability 
          key={key}
          name={key}
          value={abilities.base[key]}
          temp={abilities.temporaryModifiers[key] || 0}
        />
      ))}

      <div className="derived-scores">
        <div className="ac">
          <p>AC: {ac + armor.acBonus + 10}</p>
        </div>

        <div className="fortitude">
          <p>Fortitude: {fortitude}</p>
        </div>

        <div className="reflex">
          <p>Reflex: {reflex}</p>
        </div>

        <div className="will">
          <p>Will: {will}</p>
        </div>

        <div className="base-attack-bonus">
          <p>BAB: 1</p>
        </div>
      </div>
    </div>
  )
}

export default Abilities