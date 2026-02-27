// Button.tsx
import React from 'react';
import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: white;
  font-size: 14px;
`;

const Button = ({ label, disabled = false, onClick, backgroundColor }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} backgroundColor={backgroundColor}>
      {label}
    </StyledButton>
  );
};

export default Button;