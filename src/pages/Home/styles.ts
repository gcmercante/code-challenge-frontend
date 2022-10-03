import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10rem;
`

export const CreateButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10rem;

  button {
    border: none;
    border-radius: 6px;
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: #00875F;
    color: #FFF;
    font-weight: 600;

    &:hover {
      background-color: #00B37E;
    }
  }
`