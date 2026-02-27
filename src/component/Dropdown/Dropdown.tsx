import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "#e0e0e0" : "#ffffff"};
  color: ${({ disabled }) => (disabled ? "#888" : "#000")};

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Dropdown = ({
  options,
  value,
  disabled = false,
  placeholder = "Select...",
  onChange,
}: DropdownProps) => {
  return (
    <StyledSelect
      value={value}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
      data-testid="dropdown"
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;