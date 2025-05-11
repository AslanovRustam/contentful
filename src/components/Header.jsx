import Link from "next/link";

function Header() {
  return (
    <header className="bg-stone-100 p-8">
      <nav className="container">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-sm font-medium uppercase text-stone-400 hover:text-stone-900 transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="text-sm font-medium uppercase text-stone-400 hover:text-stone-900 transition-all duration-200"
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
