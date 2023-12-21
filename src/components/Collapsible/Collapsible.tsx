import React, { useState } from 'react';
import styled from 'styled-components';

type Collapsible = {
  name: string;
  children?: React.ReactNode;
  className?: string;
};

const ArrowIconPath = styled.path.attrs({
  d: 'M2 2L9 10L2 17',
  strokeWidth: '3',
  strokeLinecap: 'round',
})`
  stroke: ${(props) => props.theme.color.secondary};
`;

const ArrowIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <ArrowIconPath />
    </svg>
  );
};

const StyledArrowIcon = styled(ArrowIcon)``;

const CollapsibleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme.color.secondary};
  background: ${(props) => props.theme.color.primary};
  cursor: pointer;

  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;

  width: 386px;
  height: 67px;
  padding: 0 10px;

  border: 1px solid ${(props) => props.theme.color.secondary};
  border-radius: ${(props) => props.theme.border.main};
  box-shadow: 0 0 5px ${(props) => props.theme.color.primary};

  /*
  user-select is not an inherited property, though the initial auto value makes it behave like it is inherited most of 
  the time. WebKit/Chromium-based browsers do implement the property as inherited, which violates the behavior described
  in the spec, and this will bring some issues. See https://developer.mozilla.org/en-US/docs/Web/CSS/user-select.
  */
  user-select: none;
`;

const CollapsibleContent = styled.div``;

function Collapsible({
  name,
  children,
  className,
}: Collapsible): React.ReactNode {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={className}>
      <CollapsibleButton aria-controls={name} aria-expanded={expanded}>
        {name}
        <StyledArrowIcon />
      </CollapsibleButton>
      <CollapsibleContent id={name} aria-hidden={!expanded}>
        {children}
      </CollapsibleContent>
    </div>
  );
}

export default Collapsible;
