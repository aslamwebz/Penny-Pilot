
import React from 'react';

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Mobile App Test Page</h1>
        <p className="text-gray-600 mb-6">
          This page is a placeholder for testing the mobile application version of the expense tracker, built with Capacitor.
        </p>
        <p className="text-gray-600">
          You can view the live preview of your mobile app here as you build it. Any changes you make will be reflected in real-time on your device.
        </p>
      </div>
    </div>
  );
};

export default MobileApp;
