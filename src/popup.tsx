import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './colorThemes';
import { Collapsible, GlobalStyle, OptionButton } from './components';

const Container = styled.div`
  // Chrome extension are allowed to be 800px wide and 600px high
  width: 400px;
  height: 600px;
  background: ${(props) => props.theme.color.background};
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function IndexPopup() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <Collapsible name="General">
          <OptionButton text="Hide Feed" active={true} />
          <OptionButton text="Hide Homepage" active={true} />
        </Collapsible>
      </Container>
    </ThemeProvider>
  );
}

export default IndexPopup;
