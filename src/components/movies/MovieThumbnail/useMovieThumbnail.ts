'use client';

import { useState } from 'react';

export const useMovieThumbnail = (src?: string) => {
  const [useImagePlaceholder, setUseImagePlaceholder] = useState(!src);
  const onImageLoadError = () => setUseImagePlaceholder(true);
  return { useImagePlaceholder, onImageLoadError };
};
