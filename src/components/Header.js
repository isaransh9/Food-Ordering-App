import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import ProfileDropdownSection from "./ProfileDropdownSection";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const onlineStatus = useOnlineStatus();
  const isLoggedIn = useSelector((state) => state.userInfo.user.login);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-gray-800 p-4 shadow-md">
      {/* Logo Section */}
      <Link to="/home" className="p-2">
        <img className="w-24 h-auto rounded-md" src={LOGO_URL} alt="Logo" />
      </Link>

      {/* Navigation & Online Status */}
      <div className="flex items-center space-x-6 text-white">
        <ul className="flex space-x-6 font-medium">
          <li
            className={` ${onlineStatus ? "text-green-600" : "text-red-400"}`}
          >
            {onlineStatus ? "Online" : "Offline"}
          </li>
          <li className="hover:text-gray-300">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        {isLoggedIn && <ProfileDropdownSection />}
      </div>
    </div>
  );
};

export default Header;
