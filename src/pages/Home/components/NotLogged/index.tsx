import { HandPalm } from 'phosphor-react';
import { Container } from './styles';

export function NotLogged() {
  return (
    <Container>
      <HandPalm size={40} />
      <span>You must log in to create projects</span>
    </Container>
  )
}