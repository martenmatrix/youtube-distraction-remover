import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import StyledArrowIcon from './ArrowIcon';

type Collapsible = {
  name: string;
  children?: React.ReactNode;
  className?: string;
};

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
  box-shadow: 0 0 5px ${(props) => props.theme.color.secondary};

  /*
  user-select is not an inherited property, though the initial auto value makes it behave like it is inherited most of 
  the time. WebKit/Chromium-based browsers do implement the property as inherited, which violates the behavior described
  in the spec, and this will bring some issues. See https://developer.mozilla.org/en-US/docs/Web/CSS/user-select.
  */
  user-select: none;
`;

const CollapsibleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  max-height: 0;
  overflow: hidden;
  transition: max-height 200ms;
`;

function Collapsible({
  name,
  children,
  className,
}: Collapsible): React.ReactNode {
  const collapsibleContentRef = useRef(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  function onClickHandler(): void {
    setExpanded((oldState) => !oldState);
  }

  useEffect(() => {
    if (!collapsibleContentRef.current) return;

    if (expanded) {
      const neededHeight = collapsibleContentRef.current.scrollHeight;
      collapsibleContentRef.current.style.maxHeight = neededHeight + 'px';
    } else {
      collapsibleContentRef.current.style.maxHeight = 0;
    }
  }, [expanded]);

  return (
    <div className={className}>
      <CollapsibleButton
        onClick={onClickHandler}
        aria-controls={name}
        aria-expanded={expanded}>
        {name}
        <StyledArrowIcon $rotateBy={expanded ? '90deg' : '0'} />
      </CollapsibleButton>
      <CollapsibleContent
        id={name}
        aria-hidden={!expanded}
        ref={collapsibleContentRef}>
        {children}
      </CollapsibleContent>
    </div>
  );
}

export default Collapsible;
