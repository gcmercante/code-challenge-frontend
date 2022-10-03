import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  background-color: #121214;
  padding: 2rem 10rem;
  justify-content: flex-end;
  position: relative;

  ul {
    position: absolute;
    margin-top: 0.5rem;
    background-color: #00875F;
    border-radius: 6px;
    padding: 0.5rem;

    &:after {
      content: ' ';
      width: 0;
      height: 0;
      position: absolute;
      bottom: 90%;
      left: 15%;
      border-top: 10px solid transparent;
      border-bottom: 10px solid #00875F;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }

    button {
      border: none;
      background: none;
      color: #fff;
      font-weight: 600;
    }
  }

  div {
    display: flex;
    gap: 8px;
  }
`

export const LogInButton = styled.button`
  padding: 0.5rem 1rem;
  color: #fff;
  font-weight: 600;
  border: transparent;
  border-radius: 6px;
  cursor: pointer;
  background-color: #00875F;
 
  &:hover {
    background-color: #00B37E;
  }
`

export const ProfileButton = styled.button`
  border-radius: 50%;
  background-color: #00875F;
  width: 2.5rem;
  height: 2.5rem;
  border: transparent;

  &:hover {
    background-color: #00B37E;
  }
`