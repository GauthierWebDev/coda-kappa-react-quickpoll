export function Nav() {
  return (
    <nav className="flex flex-col gap-2">
      <a href="/create">Créer un sondage</a>
      <a href="/polls">Voir les sondages</a>
      <a href="/about">À propos</a>
      <a href="/leaderboard">Classement</a>
    </nav>
  );
}
