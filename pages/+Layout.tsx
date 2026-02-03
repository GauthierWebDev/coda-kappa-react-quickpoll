import "./Layout.css";
import "./tailwind.css";

import { Nav } from "../components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex container m-auto">
      <Nav />
      <Content>{children}</Content>
    </div>
  );
}
function Content({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
