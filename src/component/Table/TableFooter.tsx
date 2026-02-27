import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTfoot = styled.tfoot`
  background-color: #f9f9f9;
  font-weight: bold;
`;

const TableFooter = ({ children }: TableFooterProps) => {
  return <StyledTfoot>{children}</StyledTfoot>;
};

export default TableFooter;