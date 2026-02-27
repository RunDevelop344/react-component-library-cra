import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

const TableRow = ({ children }: TableRowProps) => {
  return <StyledTr>{children}</StyledTr>;
};

export default TableRow;