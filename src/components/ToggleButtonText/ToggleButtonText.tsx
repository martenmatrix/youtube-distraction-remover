import ToggleButton from '../ToggleButton';
import styled from 'styled-components';

const SizedToggleButton = styled(ToggleButton)`
  width: 3rem;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Option = styled.h2`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
`

type ToggleButton = {
  text: string,
  activated: boolean,
  onChange: () => void
}

function ToggleButtonText({ text, activated, onChange }: ToggleButton): JSX.Element {
  return (
    <Container>
      <SizedToggleButton activated={activated} onChange={onChange}/>
      <Option>{text}</Option>
    </Container>
  );
}

export default ToggleButtonText;
