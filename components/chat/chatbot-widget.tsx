'use client'

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { App_url } from "@/constant/static";

export default function WhatsAppWidget() {
  const [showNotification, setShowNotification] = useState(true);

  const openWhatsApp = () => {
    const phoneNumber = "917796077251"; // 🔁 Replace with your number
    const message =
      "Hello Dhanashree Tours & Travel, I need car rental details.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Notification Bubble */}
      {showNotification && (
        <div className="fixed bottom-24 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-white rounded-xl shadow-xl p-4 w-64 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <Image
                src={App_url.image.whatspp}
                alt="whatsapp"
                width={28}
                height={28}
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">
                  Dhanashree Tours
                </h3>
                <p className="text-xs text-gray-600">
                  Chat with us for instant car booking 🚗
                </p>
              </div>
              <button onClick={() => setShowNotification(false)}>
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <div
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      >
        <div className="relative w-16 h-16">
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 blur-md group-hover:opacity-50 transition duration-300" />

          <div className="relative w-full h-full rounded-full flex items-center justify-center hover:scale-110 transition">
            <Image
              src={App_url.image.whatspp}
              alt="WhatsApp"
              width={65}
              height={65}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}