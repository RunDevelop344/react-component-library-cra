import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const Wrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled }) => (disabled ? "#888" : "#000")};
  font-size: 14px;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const StyledRadio = styled.input`
  cursor: inherit;
`;

const RadioButton = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) => {
  return (
    <Wrapper disabled={disabled}>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        data-testid="radio-button"
        onChange={(e) => onChange?.(e.target.value)}
      />
      {label}
    </Wrapper>
  );
};

export default RadioButton;