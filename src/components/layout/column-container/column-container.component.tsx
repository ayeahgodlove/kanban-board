import React from "react";
import { ColumnContainerLayout } from "./colum-container.style";
interface Props {
  children: React.ReactNode;
  isHidden: boolean;
  isPreview: boolean;
}
export const ColumnContainer = React.forwardRef(
  (
    { children, isHidden, isPreview }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <ColumnContainerLayout
        ref={ref}
        isHidden={isHidden}
        isPreview={isPreview}
      >
        {children}
      </ColumnContainerLayout>
    );
  }
);
