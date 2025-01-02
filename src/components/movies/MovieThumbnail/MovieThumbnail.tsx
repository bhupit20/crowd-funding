'use client';
import { HTMLAttributes, ReactNode } from 'react';
import { useMovieThumbnail } from './useMovieThumbnail';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export interface MovieThumbnailProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  width?: number;
  height?: number;
  alt: string;
  errorText?: ReactNode;
  imageClassName?: string;
}

const MovieThumbnail = ({
  src,
  width,
  height,
  alt,
  errorText,
  imageClassName,
  ...containerProps
}: MovieThumbnailProps) => {
  const { useImagePlaceholder, onImageLoadError } = useMovieThumbnail(src);

  if (useImagePlaceholder || !src) {
    return (
      <div
        {...containerProps}
        className={twMerge('flex justify-center bg-base-200', containerProps.className)}
      >
        <span className="text-xl font-bold my-auto">{errorText}</span>
      </div>
    );
  }

  return (
    <figure {...containerProps} className={twMerge('relative', containerProps.className)}>
      <Image
        fill={!width && !height}
        width={width}
        height={height}
        className={imageClassName}
        src={src}
        alt={alt}
        onError={onImageLoadError}
      />
    </figure>
  );
};

export default MovieThumbnail;
