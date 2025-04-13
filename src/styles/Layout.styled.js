import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  background-image: 
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.background} 0%,
      ${({ theme }) => theme.colors.accent} 100%
    );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/robot-acostado.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.2;
    z-index: 0;
  }

  header {
    padding: 2rem;
    text-align: center;
    position: relative;
    z-index: 1;
    
    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }
  }

  main {
    flex: 1;
    position: relative;
    z-index: 1;
  }

  footer {
    text-align: center;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
    z-index: 1;
  }
`;