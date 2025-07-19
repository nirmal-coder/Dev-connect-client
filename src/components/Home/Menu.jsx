import { Link } from "react-router";

const Menu = () => {
  return (
    <ul className="w-[150px] lg:w-[200px] bg-gradient-to-r from-slate-700 to-gray-900 absolute bottom-[-150%] right-3 text-white font-ubuntu z-10 rounded-md">
      <Link to="/profile">
        <li className="border-b border-white p-3 text-sm lg:text-base hover:text-red-600 font-semibold cursor-pointer">
          Profile
        </li>
      </Link>
      <li className="border-b border-white p-3 text-sm lg:text-base hover:text-red-600 font-semibold cursor-pointer">
        Logout
      </li>
    </ul>
  );
};

export default Menu;
