import styled from 'styled-components';

type ToggleButtonType = {
  activated: boolean,
  onChange: () => void
}

const Container = styled.div`
  width: 4rem;
  aspect-ratio: 4 / 2;
  border-radius: 6.25rem;
  background: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.secondary};
  
  display: flex;
  align-items: center;
  
  position: relative;
`;

const WhiteCircle = styled.div`
  background: ${props => props.theme.background};
  height: 80%;
  aspect-ratio: 1/1;
  border-radius: 5rem;
  
  position: absolute;
  left: 5%;
`

function ToggleButton({ activated, onChange }: ToggleButtonType): JSX.Element {
  return (
      <Container role="checkbox" aria-checked={activated}>
        <WhiteCircle />
      </Container>
  );
}

export default ToggleButton;