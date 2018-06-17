import React from 'react'

import skills from '../db/skills.json'

const Skill = ({name}) => (
  <div className="skill">
    <div className="skill-name">{name}</div>
  </div>
)

const Skills = () => (
  <div className="skills">
    <h4>Skills</h4>
    {skills.map(skill => (
      <Skill name={skill.name} key={skill.name} />
    ))}
  </div>
)

export default Skills
