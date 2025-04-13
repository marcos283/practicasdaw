import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Gallery from './components/Gallery';
import { Container } from './styles/Layout.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <header>
          <h1>Prácticas en Conectados</h1>
        </header>
        <main>
          <Gallery />
        </main>
        <footer>
          <p>&copy; 2024 Prácticas con Alberto</p>
        </footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
