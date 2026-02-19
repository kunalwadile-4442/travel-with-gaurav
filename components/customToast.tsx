"use client";

import { Check, X } from "lucide-react";
import { createRoot } from "react-dom/client";

let container: HTMLDivElement | null = null;

const createContainer = () => {
  if (!container) {
    container = document.createElement("div");
    container.className =
      "fixed top-20 left-0 right-0 z-[9999] flex justify-center pointer-events-none px-5 sm:px-6 md:px-8";
    document.body.appendChild(container);
  }
  return container;
};

const showToast = (message: string, type: "success" | "error") => {
  const toastEl = document.createElement("div");
  const root = createRoot(toastEl);

  const remove = () => {
    toastEl.style.animation = "customToastOut 0.3s ease-out forwards";
    setTimeout(() => {
      toastEl.remove();
      root.unmount();
    }, 300);
  };

  root.render(
    <div
      className={`flex items-center gap-3 px-5 py-3.5 sm:px-6 rounded-full shadow-lg font-manrope font-medium text-sm sm:text-base w-full max-w-[calc(100%-2.5rem)] sm:max-w-md pointer-events-auto mx-1 sm:mx-0 ${
        type === "success"
          ? "bg-[#22C55E] text-white"
          : "bg-[#EF4444] text-white"
      }`}
      style={{ animation: "customToastIn 0.35s ease-out forwards" }}
    >
      {type === "success" ? (
        <Check size={20} className="shrink-0" />
      ) : (
        <X size={20} className="shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );

  const toastContainer = createContainer();
  toastContainer.appendChild(toastEl);

  setTimeout(remove, 3000);
};

export const customToast = {
  success: (message: string) => showToast(message, "success"),
  error: (message: string) => showToast(message, "error"),
};
