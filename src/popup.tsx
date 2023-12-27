import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './colorThemes';
import { GlobalStyle, StyleSettings } from './components';
import styleSettings from './styleSettings';

const Container = styled.div`
  // Chrome extension are allowed to be 800px wide and 600px high
  width: 400px;
  height: 600px;
  background: ${(props) => props.theme.color.background};
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

function IndexPopup() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <StyleSettings settings={styleSettings} />
      </Container>
    </ThemeProvider>
  );
}

export default IndexPopup;
