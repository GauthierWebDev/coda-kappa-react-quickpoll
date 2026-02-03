import { usePageContext } from "vike-react/usePageContext";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export function Navlink({ href, children, ...props }: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <Link
      href={href}
      {...props}
      className={`before:content-['>'] before:mr-1 hover:bg-slate-400/30 rounded-lg px-2 py-1 transition-[colors,translate] ${
        isActive ? "translate-x-2" : ""
      } ${props.className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
