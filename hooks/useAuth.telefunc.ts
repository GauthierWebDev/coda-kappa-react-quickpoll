export async function onLogin(email: string, password: string) {
  return { success: true, user: { email, password } };
}

export async function onRegister(
  name: string,
  email: string,
  password: string,
) {
  return { success: true, user: { name, email, password } };
}
