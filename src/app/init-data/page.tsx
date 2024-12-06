"use client";
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Kapatma ikonu için
export default function MobileSwipableDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Drawer'ı Açan Buton */}
      <button
        className="fixed bottom-4 left-4 bg-blue-500 text-white p-3 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </button>

      {/* Arka Plan (Overlay) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)} // Background'a tıklayarak kapatma
      ></div>

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full h-[90%] bg-white rounded-t-3xl shadow-lg transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        } transition-transform duration-300`}
      >
        <div className="relative h-full p-6">
          {/* Drawer İçeriği */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Drawer Content</h2>
            {/* Sağ Üstte Kapatma İkonu */}
            <button
              className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <p className="mt-4 text-gray-700">
            This is the content of the full-page swipable drawer optimized for mobile devices.
          </p>

          {/* Ek İçerik */}
          <div className="mt-6 space-y-4">
            <button className="w-full p-3 bg-blue-500 text-white rounded-lg">
              Action 1
            </button>
            <button className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg">
              Action 2
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
