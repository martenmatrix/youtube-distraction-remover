import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import ArrowIcon from './ArrowIcon';

const collapsedHeight = '67px';

const StyledArrowIcon = styled(ArrowIcon)<{ $rotateBy?: string }>`
  transition: transform 200ms;
  transform: rotate(${(props) => props.$rotateBy});
  grid-area: icon;
  align-self: center;
  justify-self: end;
`;

type Collapsible = {
  name: string;
  children?: React.ReactNode;
  className?: string;
};

const CollapsibleContainer = styled.div`
  display: grid;
  grid-template:
    'title icon'
    'content content';
  grid-template-rows: ${collapsedHeight} auto;

  color: ${(props) => props.theme.color.secondary};
  background: ${(props) => props.theme.color.primary};
  cursor: pointer;

  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;

  position: relative;
  width: 386px;
  min-height: ${collapsedHeight};
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

const CollapsibleControlButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${collapsedHeight};

  background: transparent;
  color: transparent;
  border: none;

  cursor: pointer;
`;

const CollapsibleContent = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 0;
  overflow: hidden;
  transition: max-height 200ms;
`;

const ChildrenMarginWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.div`
  grid-area: title;
  align-self: center;
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
    <CollapsibleContainer className={className}>
      <CollapsibleControlButton
        onClick={onClickHandler}
        aria-controls={name}
        aria-expanded={expanded}
        aria-label={name}
      />
      <Title>{name}</Title>
      <StyledArrowIcon
        aria-hidden="true"
        $rotateBy={expanded ? '90deg' : '0'}
      />
      <CollapsibleContent
        id={name}
        aria-hidden={!expanded}
        ref={collapsibleContentRef}
        onClick={(e) => e.stopPropagation()}>
        {<ChildrenMarginWrapper>{children}</ChildrenMarginWrapper>}
      </CollapsibleContent>
    </CollapsibleContainer>
  );
}

export default Collapsible;
