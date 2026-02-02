import "./Layout.css";
import "./tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex container m-auto">
      <Content>{children}</Content>
    </div>
  );
}
function Content({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
