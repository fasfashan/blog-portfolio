import Link from "next/link";
export default function Button({ href, children }) {
  return (
    <Link href={href}>
      <button className="py-2 text-sm font-medium   px-4 bg-teal-500 hover:bg-opacity-70 text-white rounded-md">
        <a href={href}>{children}</a>
      </button>
    </Link>
  );
}
