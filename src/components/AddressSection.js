import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAddress } from "../utils/userInfoSlice"; // Adjust the import based on your project structure
import AddressCard from "./AddressCard";

const AddressSection = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector((store) => store.userInfo.user.addresses);
  // const [addresses, setAddresses] = useState(userAddress || []);
  const [newAddress, setNewAddress] = useState(null); // This will store the new address before saving

  const addAddress = () => {
    const newAddr = {
      id: Math.random() * 1000,
      name: "",
      phoneNumber: "",
      streetName: "",
      city: "",
      landmark: "",
      pincode: "",
    };
    setNewAddress(newAddr);
  };

  const handleSaveAddress = (updatedAddress) => {
    // setAddresses((prevAddresses) => [...prevAddresses, updatedAddress]);
    dispatch(addUserAddress(updatedAddress)); // Add the new address to Redux
    setNewAddress(null); // Clear the new address after saving
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Addresses</h2>
        <button
          className="text-blue-600 hover:text-blue-700"
          onClick={addAddress}
        >
          Add New Address
        </button>
      </div>

      <div className="space-y-4">
        {newAddress && (
          <AddressCard
            key="new-address"
            address={newAddress}
            onSave={handleSaveAddress}
            isNewAddress={true}
          />
        )}

        {userAddress.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onSave={handleSaveAddress} // You can make this save logic only for editing
            isNewAddress={false}
          />
        ))}
      </div>
    </div>
  );
};

export default AddressSection;
