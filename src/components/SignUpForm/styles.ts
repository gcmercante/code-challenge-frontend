import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  input {
    padding: 0.5rem;
    border: transparent;
    font-size: 1rem;
    border-radius: 6px;
  }

  button {
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
  }
`