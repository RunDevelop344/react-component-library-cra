
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{ disabled?: boolean; color?: string; fontSize?: string }>`
  color: ${({ disabled, color }) => (disabled ? "grey" : color || "black")};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  user-select: none;
`;

export const Label: React.FC<LabelProps> = ({
  text,
  color,
  fontSize,
  disabled = false,
}) => {
  return (
    <StyledLabel color={color} fontSize={fontSize} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};