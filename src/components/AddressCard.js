import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserAddress, updateUserAddress } from "../utils/userInfoSlice";

// Single Address Card Component
const AddressCard = ({ address, onSave, isNewAddress, }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: address.id || "",
    name: address.name || "",
    phoneNumber: address.phoneNumber || "",
    streetName: address.streetName || "",
    city: address.city || "",
    landmark: address.landmark || "",
    pincode: address.pincode || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(formData);
  };

  const handleUpdate = () => {
    setIsEditing(false);
    dispatch(updateUserAddress({ id: formData.id, updatedAddress: formData }));
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start">
        <div className="w-full">
          {isEditing || isNewAddress ? (
            <div className="space-y-4">
              {/* Name and Phone Number Section */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              {/* Address Details Section */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Street Name
                  </label>
                  <input
                    type="text"
                    name="streetName"
                    value={formData.streetName}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Landmark
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-600 mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Address Display */}
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">Name: {formData.name}</h3>
                  <p className="text-gray-600">Phone: {formData.phoneNumber}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={() => dispatch(deleteUserAddress(formData.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  Address: {formData.streetName}, {formData.city},
                  {formData.landmark}, {formData.pincode}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save Button (only visible in edit mode) */}
      {(isEditing || isNewAddress) && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={isNewAddress ? handleSave : handleUpdate}
            className="text-green-600 hover:text-green-700 px-4 py-2 rounded-md border"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressCard;
