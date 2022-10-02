import { Container } from "./styles";

export function LogInForm() {
  return (
    <Container>
      <h2>
        Sign in
      </h2>
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button>Sign in</button>
    </Container>
  )
}