import Link from "next/link";

function Header() {
  return (
    <header className="bg-stone-100 p-8">
      <nav className="container">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-sm font-medium uppercase text-stone-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="text-sm font-medium uppercase text-stone-400"
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
