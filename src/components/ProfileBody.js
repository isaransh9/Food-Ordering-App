import React, { useState } from "react";
import { CreditCard, MapPin, User, Lock } from "lucide-react";
import PersonalInfoSection from "./PersonalInfoSection";
import SecuritySection from "./SecuritySection";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";

const ProfileBody = () => {
  const [activeSection, setActiveSection] = useState("personal");
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="md:w-64">
          <div className="bg-white rounded-lg shadow-md p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection("personal")}
                className={`w-full flex items-center gap-3 p-3 rounded-md ${
                  activeSection === "personal"
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <User size={20} />
                <span>Personal Info</span>
              </button>
              <button
                onClick={() => setActiveSection("addresses")}
                className={`w-full flex items-center gap-3 p-3 rounded-md ${
                  activeSection === "addresses"
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <MapPin size={20} />
                <span>Addresses</span>
              </button>
              <button
                onClick={() => setActiveSection("payment")}
                className={`w-full flex items-center gap-3 p-3 rounded-md ${
                  activeSection === "payment"
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <CreditCard size={20} />
                <span>Payment Methods</span>
              </button>
              <button
                onClick={() => setActiveSection("security")}
                className={`w-full flex items-center gap-3 p-3 rounded-md ${
                  activeSection === "security"
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <Lock size={20} />
                <span>Security</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {activeSection === "personal" && <PersonalInfoSection />}
          {activeSection === "addresses" && <AddressSection />}
          {activeSection === "payment" && <PaymentSection />}
          {activeSection === "security" && <SecuritySection />}
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
