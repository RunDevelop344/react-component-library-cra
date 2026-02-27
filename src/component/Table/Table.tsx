import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  overflow-x: auto;
`;

const Table = ({ children, disabled = false }: TableProps) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;