import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{
  disabled?: boolean;
  borderRadius?: string;
  width?: string;
  height?: string;
}>`
  display: block;
  max-width: 100%;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  object-fit: cover;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Img = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  borderRadius,
}: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      borderRadius={borderRadius}
      data-testid="img-component"
    />
  );
};

export default Img;