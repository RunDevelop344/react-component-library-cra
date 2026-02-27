import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const CardWrapper = styled.div<{ disabled?: boolean; width?: string }>`
  width: ${({ width }) => width || "300px"};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  background-color: ${({ disabled }) => (disabled ? "#f0f0f0" : "#fff")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled, onClick }) => (disabled || !onClick ? "default" : "pointer")};
  transition: transform 0.2s;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.02)")};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const Subtitle = styled.p`
  margin: 4px 0 8px 0;
  color: #666;
`;

const Footer = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #eee;
  color: #333;
  font-size: 0.9rem;
`;

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageSrc,
  content,
  footer,
  width,
  disabled = false,
  onClick
}) => {
  return (
    <CardWrapper disabled={disabled} width={width} onClick={disabled ? undefined : onClick} data-testid="card-component">
      {imageSrc && <Image src={imageSrc} alt={title} />}
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {content && <p>{content}</p>}
      </Content>
      {footer && <Footer>{footer}</Footer>}
    </CardWrapper>
  );
};

export default Card;