function Footer() {
  return (
    <footer className="bg-stone-100 text-sm text-stone-400 px-8 py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Rustam. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/AslanovRustam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-600 transition-colors"
          >
            GitHub
          </a>

          <a
            href="mailto:aslanovrg@gmail.com"
            className="hover:text-stone-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
