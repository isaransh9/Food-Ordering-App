import React from "react";
import { Bell, Lock, ChevronRight } from "lucide-react";

const SecuritySection = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Security Settings</h2>
    </div>

    <div className="space-y-4">
      <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
        <div className="flex items-center gap-3">
          <Lock className="text-gray-600" size={20} />
          <div>
            <h3 className="font-medium">Change Password</h3>
            <p className="text-gray-600 text-sm">Update your password</p>
          </div>
        </div>
        <ChevronRight className="text-gray-400" size={20} />
      </button>

      <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
        <div className="flex items-center gap-3">
          <Bell className="text-gray-600" size={20} />
          <div>
            <h3 className="font-medium">Two-Factor Authentication</h3>
            <p className="text-gray-600 text-sm">
              Add an extra layer of security
            </p>
          </div>
        </div>
        <ChevronRight className="text-gray-400" size={20} />
      </button>
    </div>
  </div>
);

export default SecuritySection;
