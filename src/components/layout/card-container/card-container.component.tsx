import React from "react";
import { CardContainerLayout } from "./card-container.style";

interface Props {
  children: React.ReactNode;
  isHidden: boolean;
  isPreview: boolean;
}
export const CardContainer = React.forwardRef(
  (
    { children, isHidden, isPreview }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <CardContainerLayout ref={ref} isHidden={isHidden} isPreview={isPreview}>
        {children}
      </CardContainerLayout>
    );
  }
);
