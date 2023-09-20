import styled from 'styled-components';

type ToggleButtonType = {
  activated: boolean,
  onChange: () => void,
  className?: string
}

const Container = styled.div<{ '$checked': boolean }>`
  width: 100%;
  aspect-ratio: 2 / 1;
  border-radius: 6.25rem;
  background: ${props => props.$checked ? props.theme.accent : props.theme.primary};
  border: 1px solid ${props => props.theme.secondary};
  
  display: flex;
  align-items: center;
  
  position: relative;
  
  animation: linear 200ms;
`;

const WhiteCircle = styled.div<{ '$checked': boolean }>`
  background: ${props => props.theme.background};
  height: 80%;
  aspect-ratio: 1 / 1;
  border-radius: 5rem;
  
  position: absolute;
  left: ${ props => props.$checked ? 'auto' : '5%' };
  right: ${ props => props.$checked ? '5%' : 'auto' };
  
  animation: linear 200ms;
`

function ToggleButton({ activated, onChange, className }: ToggleButtonType): JSX.Element {
  return (
      <Container onClick={onChange} role="checkbox" aria-checked={activated} $checked={activated} className={className}>
        <WhiteCircle $checked={activated} />
      </Container>
  );
}

export default ToggleButton;