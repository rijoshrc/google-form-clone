"use client";

import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
    </Provider>
  );
}
