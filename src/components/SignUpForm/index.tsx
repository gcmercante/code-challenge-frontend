import { Container } from "./styles";

export function SignUpForm() {
  return (
    <Container>
      <h2>
        Create your account
      </h2>
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button>Create account</button>
    </Container>
  )
}