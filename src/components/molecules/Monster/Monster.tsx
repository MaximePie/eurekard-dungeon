import React, {useEffect, useState} from "react";
import styled from "styled-components";
import HealthBar from "../../atoms/HealthBar/HealthBar";

type Monster = {
  health: number,
  initialHealth: number,
}

type useMonsterTypes = {
  monster: Monster
  removeHealth: () => void
}

function useMonster(): useMonsterTypes {
  const [monster, setMonster] = useState({} as Monster);

  useEffect(initMonster, [])

  /**
   * Fill the monster with initial values
   */
  function initMonster() {
    const mockMonster = {
      health: 20,
      initialHealth: 20,
    }

    setMonster(mockMonster);
  }


  function removeHealth() {
    setMonster(monster => ({
      ...monster,
      health: monster.health - 4
    }));
  }

  return {monster, removeHealth};
}

const StyledMonster = styled.div``

export default function MonsterComponent() {

  const {monster: {initialHealth, health}, removeHealth} = useMonster();
  console.log(health);
  console.log(initialHealth);

  return (
    <StyledMonster>
      <h4>Monster component</h4>
      <HealthBar max={initialHealth} value={health}/>
      <button onClick={removeHealth}>Pougner</button>
    </StyledMonster>
  )
}