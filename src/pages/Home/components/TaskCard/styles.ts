import styled from "styled-components";

export const TaskContainer = styled.div`
  background: #d2d2d2;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.875rem;
  gap: 0.75rem;
  width: 100%;
  margin-bottom: 1rem;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
    width: 1.5rem;
    height: 1.5rem;

    &:not(:disabled):hover {
      color: red;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

export const Checkbox = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;

  label {
    background-color: transparent;
    border: 2px solid blue;
    border-radius: 999px;
    cursor: pointer;
    left: 0;
    position: absolute;
    top: 0;
    width: 1.09rem;
    height: 1.09rem;
  }

  label:after {
    border: 2px solid gray;
    border-top: none;
    border-right: none;
    content: "";
    height: 0.29rem;
    left: 0.125rem;
    opacity: 0;
    position: absolute;
    top: 0.1rem;
    transform: rotate(-45deg);
    width: 0.45rem;
  }

  label:not(:disabled):hover {
    border: 2px solid blue;
    background-color: blue;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label {
    background-color: purple;
    border-color: purple;
  }

  input[type="checkbox"]:disabled + label {
    cursor: not-allowed;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`