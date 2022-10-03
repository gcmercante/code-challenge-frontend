import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Container } from "./styles";

interface SignUpFormProps {
  onRequestClose: () => void;
}

export function SignUpForm({ onRequestClose }: SignUpFormProps) {
  const { handleSignUp } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSignUpSubmit(event: FormEvent) {
    event.preventDefault();

    const signup = {
      email,
      password,
      name
    }

    handleSignUp(signup);
    onRequestClose();
  }

  return (
    <Container onSubmit={handleSignUpSubmit}>
      <h2>
        Create your account
      </h2>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}/>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}/>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}/>
      <button
        type="submit"
        disabled={email.length && password.length && name.length ? false : true}
      >
        Create account
      </button>
    </Container>
  )
}