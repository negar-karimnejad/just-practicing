import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="px-10 py-3 bg-gray-200">
      <div className="container font-bold flex justify-between">
        <Link to="/" className="sm:text-2xl text-xl cursor-pointer">
          Auth App
        </Link>
        <div className="flex items-center sm:gap-5 gap-3 text-sm sm:text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sign-in">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
