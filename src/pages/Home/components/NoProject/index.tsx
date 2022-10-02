import { ListPlus } from 'phosphor-react';
import { Container } from './styles';

export function NoProject() {
  return (
    <Container>
      <ListPlus size={40} />
      <span>You haven't create a project</span>
    </Container>
  )
}