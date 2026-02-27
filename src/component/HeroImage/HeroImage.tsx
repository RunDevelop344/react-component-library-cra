import React from 'react';
import styles from './HeroImage.module.css';
import { HeroImageProps } from './HeroImage.types';

export const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonClick,
  height = '400px',
  overlayOpacity = 0.4,
  className = '',
  'data-testid': testId = 'hero-image',
}) => {
  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{ backgroundImage: `url(${imageUrl})`, height }}
      data-testid={testId}
      role="region"
      aria-label="Hero section"
    >
      <div
        className={styles.overlay}
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      <div className={styles.content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        {buttonText && (
          <button
            className={styles.button}
            onClick={onButtonClick}
            type="button"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroImage;