import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar({}) {
  return (
    <header className="w-full bg-slate-800 text-zinc-300">
      <div className="grid grid-cols-3 content-center h-20 justify-items-center">
        <nav  className="mr-auto ml-8">
          <ul className="flex text-2xl">
            <li className="pr-10">
              <Link href="/shoes">
                <a>Shoes</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-4xl">
          <Link href="/">
            <a>
              <h1>Gianni's App</h1>
            </a>
          </Link>
        </div>

        <div  className="ml-auto mr-4 text-4xl">
          <BiShoppingBag />
        </div>
      </div>
    </header>
  );
}
