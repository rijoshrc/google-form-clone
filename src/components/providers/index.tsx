"use client";

import { store } from "@/lib/store";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        {children}
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
      </Provider>
    </NextUIProvider>
  );
}
