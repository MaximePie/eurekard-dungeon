import styled from "styled-components";

type HealthbarProps = { max: number, value: number }

const StyledHealthBar = styled.div`
width: 200px;
height: 40px;
border: solid;
background-color: #FF1;
`

type CurrentHealthBarProps = {
  current: number,
}

const CurrentHealthBar = styled.div<CurrentHealthBarProps>`
height: 100%;
width: ${props => props.current}%;
background-color: #F53;
`

export default function HealthBar(props: HealthbarProps) {

  const {max, value } = props;
  const valuePercentage = value / max * 100;

  return (
    <>
      <StyledHealthBar>
        <CurrentHealthBar current={valuePercentage}/>
      </StyledHealthBar>
    </>
  )
}
