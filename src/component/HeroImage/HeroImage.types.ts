export interface HeroImageProps {
  /** Background image URL */
  imageUrl: string;

  /** Main heading */
  title?: string;

  /** Subtitle text */
  subtitle?: string;

  /** Optional CTA button text */
  buttonText?: string;

  /** CTA click handler */
  onButtonClick?: () => void;

  /** Height of hero section */
  height?: string;

  /** Overlay opacity (0–1) */
  overlayOpacity?: number;

  /** Custom class */
  className?: string;

  /** Test id */
  'data-testid'?: string;
}