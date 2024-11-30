import Link from "next/link";
import { Poppins } from "next/font/google";

import { ModeToggle } from "@/components/mode-toggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
})

export const Navbar = () => {
  return (
    <nav className={`${poppins.className} sticky top-0 backdrop-blur z-20 px-6 py-2 flex justify-between items-center sm:px-16 px-8 max-w-full border-b border-gray-300 dark:border-gray-600`}>
      <Link href="/">
        <h1 className="text-xl font-semibold py-2">
          Nizar
        </h1>
      </Link>
      <ModeToggle />
    </nav>
  );
}