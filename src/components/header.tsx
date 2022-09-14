import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center mt-4 justify-between">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight ">
        <Link href="/">
          <a className="hover:opacity-80 ">Fasha Fadillah</a>
        </Link>
      </h2>
      <ul className="flex space-x-10">
        <Link href="/about">
          <li className="hover:opacity-80 cursor-pointer ">About</li>
        </Link>
        <Link href="/projects">
          <li className="hover:opacity-80 cursor-pointer ">Projects</li>
        </Link>
        <Link href="/blog">
          <li className="hover:opacity-80 cursor-pointer ">Blog</li>
        </Link>
      </ul>
    </header>
  );
}
