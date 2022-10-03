import { FormEvent, useContext, useState } from "react";

import { AuthContext } from "../../../../contexts/AuthContext";
import { Container } from "./styles";

interface LogInFormProps {
  onRequestClose: () => void;
}

export function LogInForm({ onRequestClose }: LogInFormProps) {
  const { handleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignInSubmit(event: FormEvent) {
    event.preventDefault();

    const signin = {
      email,
      password,
    }

    handleSignIn(signin);
    onRequestClose();
  }

  return (
    <Container onSubmit={handleSignInSubmit}>
      <h2>
        Sign in
      </h2>
      <input 
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit" disabled={ email.length && password.length ? false : true }>Sign in</button>
    </Container>
  )
}