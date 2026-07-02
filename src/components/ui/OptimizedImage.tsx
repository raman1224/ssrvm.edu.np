'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  onError?: () => void;
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  fill = false,
  width,
  height,
  sizes,
  objectFit = 'cover',
  onError,
  fallbackSrc,
  ...restProps
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(() => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
    onError?.();
  }, [fallbackSrc, onError]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // If fill is true, we don't need width/height
  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={imgSrc}
          alt={alt}
          fill
          sizes={sizes || '100vw'}
          priority={priority}
          className={`object-${objectFit} transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onError={handleError}
          onLoad={handleLoad}
          {...restProps}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
        )}
      </div>
    );
  }

  // For non-fill images, require width and height
  if (!width || !height) {
    console.warn('OptimizedImage: width and height are required when fill is false');
    return null;
  }

  return (
    <div className={className}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes || '100vw'}
        priority={priority}
        className={`object-${objectFit} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onError={handleError}
        onLoad={handleLoad}
        {...restProps}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}
    </div>
  );
}