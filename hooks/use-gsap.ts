'use client';

import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useGSAP(
  effect: (gsapContext: gsap.Context) => void | (() => void),
  dependencies: React.DependencyList = []
) {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context((self) => {
      effect(self);
    });

    return () => ctx.revert();
  }, dependencies);
}
