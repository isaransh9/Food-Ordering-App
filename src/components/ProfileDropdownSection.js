import React, { useState } from "react";
import { X, Bell, LogOut, User, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../utils/userInfoSlice";
import { PROFILE_AVATAR } from "../utils/constants";

const ProfileDropdownSection = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [notifications, setNotifications] = useState("Allow");

  const userPersonalInfo = useSelector(
    (store) => store.userInfo.user.personalInfo
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleNotification = () => {
    setNotifications(notifications === "Allow" ? "Mute" : "Allow");
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const ProfileCard = () => (
    <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-4 w-80 text-white z-50">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={PROFILE_AVATAR}
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div>
          <h3 className="font-medium">{userPersonalInfo?.name}</h3>
          <p className="text-sm text-gray-400">{userPersonalInfo?.email}</p>
        </div>
      </div>

      <div className="space-y-2">
        <Link
          to="/profile"
          className="flex items-center gap-3 w-full p-2 hover:bg-gray-700 rounded-md"
          onClick={() => setShowProfile(false)}
        >
          <User size={20} />
          <span>My Profile</span>
        </Link>
        <button
          onClick={() => setShowSettings(true)}
          className="flex items-center gap-3 w-full p-2 hover:bg-gray-700 rounded-md"
        >
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button
          onClick={toggleNotification}
          className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-md"
        >
          <div className="flex items-center gap-3">
            <Bell size={20} />
            <span>Notification</span>
          </div>
          <span className="text-sm text-blue-400">{notifications}</span>
        </button>
        <button
          className="flex items-center gap-3 w-full p-2 hover:bg-gray-700 rounded-md text-red-400"
          onClick={handleLogOut}
        >
          <LogOut size={20} />
          <span>Log Out</span>{" "}
        </button>
      </div>
    </div>
  );

  const SettingsCard = () => (
    <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-4 w-80 text-white z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Settings</h3>
        <button
          onClick={() => setShowSettings(false)}
          className="text-gray-400 hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm">Theme</label>
          <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm">Language</label>
          <select className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
            <option>Eng</option>
            <option>Esp</option>
          </select>
        </div>
      </div>
    </div>
  );

  const EditProfileCard = () => (
    <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg p-6 w-96 text-white z-50">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://img.freepik.com/premium-vector/user-circle-with-blue-gradient-circle_78370-4727.jpg?w=1480"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="font-medium">Your name</h3>
            <p className="text-sm text-gray-400">yourname@gmail.com</p>
          </div>
        </div>
        <button
          onClick={() => setShowEditProfile(false)}
          className="text-gray-400 hover:text-gray-200"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            value="your name"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email account</label>
          <input
            type="email"
            value="yourname@gmail.com"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Mobile number</label>
          <input
            type="tel"
            placeholder="Add number"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Location</label>
          <input
            type="text"
            value="USA"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Save Change
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={() => setShowProfile(!showProfile)}
        className="flex items-center"
      >
        <img
          src={PROFILE_AVATAR}
          alt="User Avatar"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
      </button>

      {showProfile && <ProfileCard />}
      {showSettings && <SettingsCard />}
      {showEditProfile && <EditProfileCard />}
    </div>
  );
};

export default ProfileDropdownSection;
