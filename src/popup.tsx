import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './colorThemes';
import { GlobalStyle, Section } from './components';

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
        <Section settings={[{ name: 'Hide Feed', storageId: 'hideFeed' }]} />
      </Container>
    </ThemeProvider>
  );
}

export default IndexPopup;
