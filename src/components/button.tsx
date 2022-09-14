export default function Button({ href, children }) {
  return (
    <a href={href}>
      <button className="py-2 w-full px-4 bg-teal-500 hover:bg-opacity-70 text-white rounded-md">{children}</button>
    </a>
  );
}
