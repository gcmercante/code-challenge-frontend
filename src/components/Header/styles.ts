import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  background-color: #ddd;
  padding: 2rem 10rem;
  justify-content: flex-end;

  div {
    display: flex;
    gap: 8px;
  }
`

export const LogInButton = styled.button`
  padding: 0.5rem 1rem;
  color: black;
  border: transparent;
  border-radius: 6px;
  cursor: pointer;
`

export const ProfileButton = styled.button`
  border-radius: 50%;
  background-color: black;
  width: 2.5rem;
  height: 2.5rem;
  border: transparent;
`