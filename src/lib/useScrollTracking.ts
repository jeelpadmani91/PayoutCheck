'use client';

import { useEffect } from 'react';
import { initScrollTracking, trackEvent } from './analytics';

export function useScrollTracking() {
  useEffect(() => {
    const cleanup = initScrollTracking((depth) => {
      trackEvent(depth);
    });
    
    return cleanup;
  }, []);
}
