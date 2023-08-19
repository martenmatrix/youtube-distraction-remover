import styled from 'styled-components';
import { GlobalStyle } from './components';

const Container = styled.div`
  // Chrome extension are allowed to be 800px wide and 600px high
  width: 400px;
  height: 600px;
`

function IndexPopup() {
  return (
    <Container>
      <GlobalStyle />
      The start of a beautiful extension.
    </Container>
  );
}

export default IndexPopup
