import React, { useState } from 'react';
import styled from 'styled-components';

type Collapsible = {
  name: string;
  children?: React.ReactNode;
  className?: string;
};

const CollapsibleButton = styled.div``;

const CollapsibleContent = styled.div``;

function Collapsible({ name, children, className }): React.ReactNode {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={className}>
      <CollapsibleButton aria-controls={name} aria-expanded={expanded}>
        {name}
      </CollapsibleButton>
      <CollapsibleContent id={name} aria-hidden={!expanded}>
        {children}
      </CollapsibleContent>
    </div>
  );
}

export default Collapsible;
