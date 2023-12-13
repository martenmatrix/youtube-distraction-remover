import styled from 'styled-components';

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

function OptionButton({ text, active, className }: OptionButtonProps): React.ReactNode {
  return (<StatusDisabled />)
}

export default OptionButton;
