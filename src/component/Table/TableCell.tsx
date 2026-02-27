import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const TableCell = ({ children }: TableCellProps) => {
  return <StyledTd>{children}</StyledTd>;
};

export default TableCell;