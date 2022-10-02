import styled from "styled-components";

export const ProjectContainer = styled.div`
  background-color: #ddd;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 45%;
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
    color: red;
  }
`
export const EditButton = styled.button`
  &:hover {
    color: blue;
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
  }

  button {
    border: transparent;
    background-color: transparent;
    cursor: pointer;
  }
`