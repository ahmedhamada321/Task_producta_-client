import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./helpers";

interface Props {
  children?: React.ReactNode;
}

export const Main: React.FC<Props> = ({ children }) => {
  return <RouterProvider router={router} />;
};
