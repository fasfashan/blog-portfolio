import { HiChevronRight } from "react-icons/hi";
export default function ButtonText({ href, children }) {
  return (
    <a href={href}>
      <button className="text-sm flex items-center hover:text-teal-400  bg-transparent  text-teal-500 ">
        {children}
        <HiChevronRight />
      </button>
    </a>
  );
}
