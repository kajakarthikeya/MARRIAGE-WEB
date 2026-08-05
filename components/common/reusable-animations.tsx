'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { Card, CardProps } from '@/components/ui/card';
import { ImageWrapper, ImageWrapperProps } from '@/components/common/image-wrapper';
import { DecorativeDivider, DecorativeDividerProps } from '@/components/ui/decorative-divider';

/* 1. Animated Heading */
export interface AnimatedHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  children,
  as: Component = 'h2',
  className,
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <Component ref={ref as unknown as React.RefObject<HTMLHeadingElement>} className={cn('overflow-hidden', className)}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: '100%' }}
        animate={isInView ? { opacity: 1, y: '0%' } : { opacity: 0, y: '100%' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </Component>
  );
}

/* 2. Animated Paragraph */
export interface AnimatedParagraphProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedParagraph({ children, className, delay = 0.15 }: AnimatedParagraphProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.p>
  );
}

/* 3. Animated Button */
export function AnimatedButton(props: ButtonProps) {
  return <Button {...props} />;
}

/* 4. Animated Card */
export function AnimatedCard(props: CardProps) {
  return <Card {...props} />;
}

/* 5. Animated Image */
export function AnimatedImage(props: ImageWrapperProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <ImageWrapper {...props} />
    </motion.div>
  );
}

/* 6. Animated Divider */
export function AnimatedDivider(props: DecorativeDividerProps) {
  return <DecorativeDivider {...props} />;
}
