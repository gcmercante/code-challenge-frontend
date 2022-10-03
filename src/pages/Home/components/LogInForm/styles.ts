import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  input {
    padding: 0.5rem;
    border: 2px solid transparent;
    font-size: 1rem;
    border-radius: 6px;

    background-color: #121214;
    color: #E1E1E6;

    &:focus {
      outline: none;
      border: 2px solid #00875F;
    }
  }

  button {
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: #00875F;
    color: #E1E1E6;
    font-weight: 600;

    &:not(:disabled):hover {
      background-color: #00B37E;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`