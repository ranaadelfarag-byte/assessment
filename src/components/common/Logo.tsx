import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex h-12 items-center justify-center">
      <img src="/logo.png" alt="logo" className="h-full w-full" />
    </Link>
  );
}
