import { usePageContext } from "vike-react/usePageContext";
import { Link, Navlink } from "./Link";

export function Nav() {
  const pageContext = usePageContext();
  return (
    <aside className="sticky flex flex-col gap-8 top-4 left-4 m-4 shrink-0">
      <header className="text-center text-4xl hard-shadow shadow-slate-500 bg-slate-300 px-4 py-2 rounded-lg text-slate-950">
        <p>
          <Link href="/">
            <span className="font-tangerine font-black">Quick</span>
            <span className="text-slate-700">Poll</span>
          </Link>
        </p>
      </header>

      <nav className="flex flex-col gap-1 bg-slate-300 p-4 rounded-lg hard-shadow shadow-slate-500 text-slate-950">
        {pageContext.isAuthenticated && (
          <Navlink href="/create">Créer un sondage</Navlink>
        )}
        <Navlink href="/polls">Voir les sondages</Navlink>
        <Navlink href="/about">À propos</Navlink>
        <Navlink href="/leaderboard">Classement</Navlink>
      </nav>
    </aside>
  );
}
