import styled from 'styled-components';

type ToggleButtonType = {
  activated: boolean,
  onChange: () => void
}

const Container = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: 6.25rem;
  background: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.secondary};
  
  position: relative;
`;

const WhiteCircle = styled.div`
  background: ${props => props.theme.background};
  height: 50%;
  aspect-ratio: 1/1;
  border-radius: 5rem;
  
  position: absolute;
  top: 0;
  bottom: 0;
`

function ToggleButton({ activated, onChange }: ToggleButtonType): JSX.Element {
  return (
      <Container role="checkbox" aria-checked={activated}>
        <WhiteCircle />
      </Container>
  );
}

export default ToggleButton;