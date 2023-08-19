import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components';
import { defaultTheme } from './colorThemes';

const Container = styled.div`
  // Chrome extension are allowed to be 800px wide and 600px high
  width: 400px;
  height: 600px;
`

function IndexPopup() {
  return (
    <Container>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        The start of a beautiful extension.
      </ThemeProvider>
    </Container>
  );
}

export default IndexPopup
