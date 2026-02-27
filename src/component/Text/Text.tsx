// src/components/Text/Text.tsx
import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ color?: string; fontSize?: string; disabled?: boolean }>`
  color: ${({ disabled, color }) => (disabled ? "grey" : color || "black")};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  user-select: none;
`;

export const Text: React.FC<TextProps> = ({ content, color, fontSize, disabled = false }) => {
  return <StyledText color={color} fontSize={fontSize} disabled={disabled}>{content}</StyledText>;
};