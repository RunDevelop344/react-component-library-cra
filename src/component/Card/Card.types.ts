export interface CardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  content?: string;
  footer?: string;
  width?: string;
  disabled?: boolean;
  onClick?: () => void;
}