"use client";

import { Provider } from "react-redux";
import { Suspense } from "react";
import { store } from "@/redux/store";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Suspense>
        {children}
      </Suspense>
    </Provider>
  );
}
