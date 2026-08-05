'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageWrapperProps extends Omit<ImageProps, 'onLoadingComplete'> {
  containerClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
}

export function ImageWrapper({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = 'auto',
  ...props
}: ImageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[#F5EFE6] rounded-xl',
        aspectRatios[aspectRatio],
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out object-cover',
          isLoading ? 'scale-105 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100',
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
