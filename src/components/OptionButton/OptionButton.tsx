import styled from 'styled-components';
import React from 'react';

type OptionButtonProps = {
  text: string,
  active: boolean,
  className?: string
}

const Status = styled.div`
  width: 68px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.border.main};
  border: 1px solid;
  font-family: 'Work Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: ${props => props.theme.color.active};
`

const StatusActive = styled(Status).attrs(() => ({ children: "Active" }))`
  border-color: ${props => props.theme.color.active};
  box-shadow: 0 0 4px ${props => props.theme.color.active};
  background: ${props => props.theme.color.active + 50}; // opacity is 0.5 => hex + 50
`

const StatusDisabled = styled(Status).attrs(() => ({ children: "Disabled" }))`
  border-color: ${props => props.theme.color.disabled};
  box-shadow: 0 0 4px ${props => props.theme.color.disabled};
  background: ${props => props.theme.color.disabled + 50}; // opacity is 0.5 => hex + 50
`

const OptionButtonContainer = styled.div`
  display: flex;
  width: 340px;
  height: 50px;
  padding: 0 18px;
  
  justify-content: space-between;
  align-items: center;
  border-radius: ${props => props.theme.border.main};
  
  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.theme.color.secondary};
  
  background: ${props => props.theme.color.primary};
  box-shadow: 0 0 10px ${props => props.theme.color.background} inset;
`

function OptionButton({ text, active, className }: OptionButtonProps): React.ReactNode {
  return <OptionButtonContainer className={className} role="switch" aria-checked={active}>
    <div>{text}</div>
    {active ? <StatusActive aria-hidden /> : <StatusDisabled aria-hidden />}
  </OptionButtonContainer>
}

export default OptionButton;
