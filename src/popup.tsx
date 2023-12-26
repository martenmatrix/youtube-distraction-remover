import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from './colorThemes';
import { GlobalStyle, Section } from './components';
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
  const sections = Array.from(
    new Set(...styleSettings.map((setting) => setting.section)),
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        {sections.map((section) => {
          return (
            <Section
              name={section}
              settings={styleSettings.filter((setting) =>
                setting.section.includes(section),
              )}
            />
          );
        })}
      </Container>
    </ThemeProvider>
  );
}

export default IndexPopup;
