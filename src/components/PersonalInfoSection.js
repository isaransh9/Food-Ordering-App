import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserPersonalInfo } from "../utils/userInfoSlice";
import { Edit2 } from "lucide-react";
import { PROFILE_AVATAR } from "../utils/constants";

const PersonalInfoSection = () => {
  const userPersonalInfo = useSelector(
    (store) => store.userInfo.user.personalInfo
  );
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: userPersonalInfo?.name || "",
    email: userPersonalInfo?.email || "",
    phoneNumber: userPersonalInfo?.phoneNumber || "",
    dateOfBirth: userPersonalInfo?.dateOfBirth || "",
  });

  // This will be triggered only when user clicks on save button
  const handleSaveEvent = () => {
    setEditMode(false);
    dispatch(addUserPersonalInfo(formData)); // Dispatch updated form data to Redux
  };

  // On any change in the input details this will be triggered
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        {editMode ? (
          <button
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            onClick={handleSaveEvent}
          >
            <Edit2 size={18} /> Save
          </button>
        ) : (
          <button
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            onClick={() => setEditMode(true)}
          >
            <Edit2 size={18} /> Edit
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={PROFILE_AVATAR}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />
          <div>
            <h3 className="text-lg font-medium">{userPersonalInfo?.name}</h3>
            <p className="text-gray-600">{userPersonalInfo?.email}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className="w-full p-2 border rounded-md bg-gray-50"
              onChange={handleInputChange}
              disabled={!editMode} // Disable editing when not in edit mode
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full p-2 border rounded-md bg-gray-50"
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder={formData.phoneNumber || "Add phone number"}
              className="w-full p-2 border rounded-md"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              className="w-full p-2 border rounded-md"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
