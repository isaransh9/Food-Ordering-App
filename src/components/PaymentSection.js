import React from "react";

import { CreditCard } from "lucide-react";

const PaymentSection = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">Payment Methods</h2>
      <button className="text-blue-600 hover:text-blue-700">
        Add New Card
      </button>
    </div>

    <div className="space-y-4">
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CreditCard className="text-gray-600" size={24} />
            <div>
              <h3 className="font-medium">•••• •••• •••• 4242</h3>
              <p className="text-gray-600 text-sm">Expires 12/24</p>
            </div>
          </div>
          <button className="text-red-600 hover:text-red-700">Remove</button>
        </div>
      </div>
    </div>
  </div>
);

export default PaymentSection;
