import styled from "styled-components";
import { blue } from "../../../utils/colors";

export const AppContainerLayout = styled.div`
    align-items: flex-start;
    background-color: ${blue};
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    width: 100%;
    overflow-x: scroll;
`;