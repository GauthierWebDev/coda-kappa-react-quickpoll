// https://vike.dev/Head

import logoUrl from "../assets/logo.svg";

export function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="ttps://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&family=Tangerine:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
