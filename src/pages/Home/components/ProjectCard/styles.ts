import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: #323238;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 45%;
  max-width: 45%;
  border-radius: 6px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;

    & > div {
      display: flex;
      gap: 8px;

      button {
        color: #E1E1E6;
        cursor: pointer;
        border: transparent;
        background-color: transparent;
      }
    }
  }
  span {
    font-weight: 700;
  }
`
export const TrashButton = styled.button`
  &:hover {
    color: #AA2834;
  }
`
export const EditButton = styled.button`
  &:hover {
    color: #00875F;
  }
`

export const NoTask = styled.div`
  opacity: 0.6;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const CreateTask = styled.form`
  display: flex;
  gap: 8px;
  width: 100%;

  input {
    width: 100%;
    border: transparent;
    border-radius: 6px;
    padding: 0 0.5rem;
    font-size: 12px;
    background-color: #121214;
    color: #E1E1E6;

    &:focus {
      outline: none;
      border: 2px solid #00875F;
    }
  }

  button {
    border: transparent;
    background-color: transparent;
    cursor: pointer;
    color: #00875F;

    &:not(:disabled):hover {
      color: #00B37E;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`