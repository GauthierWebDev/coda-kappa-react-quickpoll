import { useState } from "react";
import { onLogin, onRegister } from "./useAuth.telefunc";
import { navigate } from "vike/client/router";

export function useAuth() {
  const [email, setEmail] = useState<string>("test@test.fr");
  const [password, setPassword] = useState<string>("testtesttest");
  const [name, setName] = useState<string>("Jean");

  const login = async () => {
    await onLogin(email, password);
  };

  const register = async () => {
    await onRegister(name, email, password);
    navigate("/login");
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
