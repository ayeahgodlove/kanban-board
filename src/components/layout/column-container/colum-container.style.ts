import styled from "styled-components";
import { gray } from "../../../utils/colors";
import { DragPreviewContainerStyle } from "../drag-preview-container/drag-preview-container.style";

export const ColumnContainerLayout = styled(DragPreviewContainerStyle)`
  background-color: ${gray};
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;
