import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #121212;
    color: #0ff;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3 {
    text-shadow: 0 0 5px #0f0, 0 0 10px #0f0;
  }

  button {
    /*... your existing styles */
    background-color: #222;
    border: 1px solid #0f0;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    &:hover {
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
    }
  }


input, button {
    background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black background
    border: 1px solid #0f0; // Neon green border
    color: #0ff; // Cyan text color
    padding: 0.5rem 1rem;
    font-family: 'Roboto Mono', monospace; // Cyberpunk font
    text-shadow: 0 0 5px #0f0; // Green glow on text

    &:focus {
      outline: none;
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.8); // Glowing outline on focus
    }
`;

export default GlobalStyle;