import React from 'react';
import styled from 'styled-components';

type OptionButtonProps = {
  text: string;
  active: boolean;
  onClick?: () => {};
  className?: string;
};

const Status = styled.div`
  width: 68px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.border.main};
  border: 1px solid;
  font-family: 'Work Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: ${(props) => props.theme.color.active};
`;

const StatusActive = styled(Status).attrs(() => ({ children: 'Active' }))`
  border-color: ${(props) => props.theme.color.active};
  box-shadow: 0 0 4px ${(props) => props.theme.color.active};
  background: ${(props) =>
    props.theme.color.active + 50}; // opacity is 0.5 => hex + 50
`;

const StatusDisabled = styled(Status).attrs(() => ({ children: 'Disabled' }))`
  border-color: ${(props) => props.theme.color.disabled};
  box-shadow: 0 0 4px ${(props) => props.theme.color.disabled};
  background: ${(props) =>
    props.theme.color.disabled + 50}; // opacity is 0.5 => hex + 50
`;

const OptionButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  margin: 10px 0;
  padding: 9px 18px;
  border: 1px solid transparent;

  /*
  user-select is not an inherited property, though the initial auto value makes it behave like it is inherited most of 
  the time. WebKit/Chromium-based browsers do implement the property as inherited, which violates the behavior described
  in the spec, and this will bring some issues. See https://developer.mozilla.org/en-US/docs/Web/CSS/user-select.
   */
  user-select: none;

  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.border.main};

  font-family: 'Work Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.color.secondary};

  background: ${(props) => props.theme.color.primary};
  box-shadow: 0 0 10px ${(props) => props.theme.color.background} inset;

  transition: border-color 100ms;
  &:hover {
    border-color: ${(props) => props.theme.color.secondary};
  }
`;

function OptionButton({
  text,
  active,
  onClick,
  className,
}: OptionButtonProps): React.ReactNode {
  return (
    <OptionButtonContainer
      onClick={onClick}
      className={className}
      role="switch"
      aria-checked={active}
      aria-labelledby="optionButtonDescription">
      <div id="optionButtonDescription">{text}</div>
      {active ? <StatusActive aria-hidden /> : <StatusDisabled aria-hidden />}
    </OptionButtonContainer>
  );
}

export default OptionButton;
