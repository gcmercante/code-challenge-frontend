import styled from "styled-components";

export const TaskContainer = styled.div`
  background: none;
  border-radius: 6px;
  border: 2px solid #015F43;
  padding: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 0.8rem;
  font-weight: 600;
  gap: 0.75rem;
  max-width: 100%;
  margin-bottom: 1rem;

  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    overflow: auto;

    span {
      display: inline-block;
      overflow-wrap: break-word;
    }
  }


  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
    width: 1.5rem;
    height: 1.5rem;
    color: #E1E1E6;

    &:not(:disabled):hover {
      color: #AA2834;
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
    border: 2px solid #00875F;
    border-radius: 999px;
    cursor: pointer;
    left: 0;
    position: absolute;
    top: 0;
    width: 1.09rem;
    height: 1.09rem;
  }

  label:after {
    border: 2px solid #00875F;
    border-top: none;
    border-right: none;
    content: " ";
    height: 0.29rem;
    left: 0.125rem;
    opacity: 0;
    position: absolute;
    top: 0.1rem;
    transform: rotate(-45deg);
    width: 0.45rem;
  }

  label:not(:disabled):hover {
    border: 2px solid #00875F;
    background-color: #00B37E;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label {
    background-color: #323238;
    border-color: #00875F;
  }

  input[type="checkbox"]:disabled + label {
    cursor: not-allowed;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`