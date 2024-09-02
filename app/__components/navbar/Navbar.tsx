import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchFilters";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-whote z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/Airbnb_Logo_Bélo.svg.png" alt="logo" width={100} height={38} />
          </Link>
          <div className="flex space-x-6">
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            add property - user nav
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
