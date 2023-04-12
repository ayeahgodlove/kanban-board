import React from "react";
import { AppContainerLayout } from "./app-container.style";

interface Props {
  children: React.ReactNode;
}
const AppContainer: React.FC<Props> = ({ children }) => {
  return <AppContainerLayout>{children}</AppContainerLayout>;
};

export default AppContainer;
