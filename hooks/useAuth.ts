import { useState } from "react";
import { onLogin, onRegister } from "./useAuth.telefunc";

export function useAuth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const login = async () => {
    await onLogin(email, password);
  };

  const register = async () => {
    await onRegister(name, email, password);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    login,
    register,
  };
}
