import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './colorThemes';
import { GlobalStyle, OptionButton } from './components';

const Container = styled.div`
  // Chrome extension are allowed to be 800px wide and 600px high
  width: 400px;
  height: 600px;
  background: ${(props) => props.theme.color.background};
  border: none;
`;

function IndexPopup() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <OptionButton text="Hide Feed" active={true} />
      </Container>
    </ThemeProvider>
  );
}

export default IndexPopup;
