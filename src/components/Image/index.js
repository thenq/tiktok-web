import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
  const [fallBack, setFallback] = useState('');

  const handleImageError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      ref={ref}
      className={classNames(styles.wrapper, className)}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleImageError}
    />
  );
});

export default Image;
