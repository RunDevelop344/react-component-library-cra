import styled from "styled-components";
import { TableHeaderProps } from "./TableHeader.types";

const StyledTh = styled.th`
  padding: 12px;
  background-color: #f5f5f5;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableHeader = ({ children }: TableHeaderProps) => {
  return <StyledTh>{children}</StyledTh>;
};

export default TableHeader;