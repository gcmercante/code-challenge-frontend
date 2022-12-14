import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1rem;
  }

  html {
    @media (min-width: 720px) {
        font-size: 93.75%
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #202024;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #202024;
    color: #E1E1E6;
    padding: 3rem;
    position: relative;

    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    color: #E1E1E6;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;