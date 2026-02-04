import "./tailwind.css";

import { Nav } from "../components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-800 min-h-dvh w-dvw">
      <div className="flex container m-auto">
        <Nav />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-4 p-4 hard-shadow shadow-slate-500 bg-slate-300 rounded-lg w-full h-max">
      {children}
    </div>
  );
}
