import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar({}) {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
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

        <div className="logo">
          <Link href="/">
            <a>
              <h1>Gianni's App</h1>
            </a>
          </Link>
        </div>

        <div className="shopping-cart">
          <BiShoppingBag />
        </div>
      </div>
    </header>
  );
}
