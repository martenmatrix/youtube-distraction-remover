import React from 'react';
import styled from 'styled-components';

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

const StyledArrowIcon = styled(ArrowIcon)<{ $rotateBy?: string }>`
  transition: transform 200ms;
  transform: rotate(${(props) => props.$rotateBy});
`;

export default StyledArrowIcon;
