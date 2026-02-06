import { usePageContext } from "vike-react/usePageContext";
import { useAuth } from "@/hooks/useAuth";

export default function Register() {
  const pageContext = usePageContext();
  const { reason } = pageContext.urlParsed.search;
  const auth = useAuth();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.login();
  };

  return (
    <main>
      <h1>Connexion</h1>

      {reason === "create-poll" && (
        <p className="bg-amber-500/50 p-4 rounded-md border-2 border-amber-600">
          Vous devez vous connecter pour créer un sondage
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={auth.email}
          onChange={(event) => auth.setEmail(event.target.value)}
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={auth.password}
          onChange={(event) => auth.setPassword(event.target.value)}
        />

        <button type="submit">Connexion</button>
      </form>
    </main>
  );
}
