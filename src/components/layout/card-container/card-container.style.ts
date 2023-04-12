import styled from "styled-components";
import { white } from "../../../utils/colors";
import { DragPreviewContainerStyle } from "../drag-preview-container/drag-preview-container.style";

export const CardContainerLayout = styled(DragPreviewContainerStyle)`
    background-color: ${white};
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadow: #091e4240 0px 1px 0px 0px;
`;