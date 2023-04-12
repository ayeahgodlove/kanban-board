import styled from "styled-components";

interface DragPreviewContainerProps {
    isHidden?: boolean;
    isPreview?: boolean;
}

export const DragPreviewContainerStyle = styled.div<DragPreviewContainerProps>`
    transform: ${(props) => (props.isPreview ? "rotate(5deg)" : undefined)};
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

interface DragPreviewWrapperProps {
   position: {
    x: number;
    y: number;
   }
}

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(({ position: { x, y } }) => ({
    style: {
        transform: `translate(${x}px, ${y}px)`
    }
}))<DragPreviewWrapperProps>``;
