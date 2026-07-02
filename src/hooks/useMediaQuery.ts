'use client';

// src/hooks/useMediaQuery.ts
import { useSyncExternalStore } from 'react';

export default function useMediaQuery(query: string): boolean {
  const subscribe = (onStoreChange: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener('change', onStoreChange);

    return () => {
      media.removeEventListener('change', onStoreChange);
    };
  };

  const getSnapshot = () => {
    const media = window.matchMedia(query);
    return media.matches;
  };

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
