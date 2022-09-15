import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex items-center mt-4 justify-between">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight ">
        <Link href="/">
          <a className="hover:opacity-80 ">Fasha Fadillah</a>
        </Link>
      </h2>
      <ul className="md:flex text-sm space-x-10 hidden">
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "border-b border-teal-500 text-teal-500" : ""}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "border-b border-teal-500 text-teal-500" : ""}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className={router.pathname == "/projects" ? "border-b border-teal-500 text-teal-500" : ""}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={router.pathname == "/blog" ? "border-b border-teal-500 text-teal-500" : ""}>Blog</a>
          </Link>
        </li>
      </ul>
      <div className="md:hidden top-16 w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="">
              <HiMenuAlt2 className=" text-black text-3xl hover:opacity-50" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-2 py-2 ">
                <Link href="/">
                  <Menu.Item>
                    <a href="">
                      <button className={`${router.pathname == "/" ? "bg-teal-500 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>Home</button>
                    </a>
                  </Menu.Item>
                </Link>
                <Link href="/about">
                  <Menu.Item>
                    <a href="">
                      <button className={`${router.pathname == "/about" ? "bg-teal-500 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>About</button>
                    </a>
                  </Menu.Item>
                </Link>
                <Link href="/projects">
                  <Menu.Item>
                    <a href="">
                      <button className={`${router.pathname == "/projects" ? "bg-teal-500 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>Projects</button>
                    </a>
                  </Menu.Item>
                </Link>
                <Link href="/blog">
                  <Menu.Item>
                    <a href="">
                      <button className={`${router.pathname == "/blog" ? "bg-teal-500 text-white" : ""} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>Blog</button>
                    </a>
                  </Menu.Item>
                </Link>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
