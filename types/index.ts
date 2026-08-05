export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'normal' | 'glass' | 'elevated' | 'bordered';

export type BackgroundVariant = 
  | 'textured-ivory' 
  | 'cream' 
  | 'gradient-white' 
  | 'radial-glow' 
  | 'paper-texture' 
  | 'floral-subtle';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type ContainerWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export type AnimationType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'fadeLeft' 
  | 'fadeRight' 
  | 'scale' 
  | 'rotate' 
  | 'stagger' 
  | 'blurReveal' 
  | 'textReveal';

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ComponentBaseProps {
  className?: string;
  id?: string;
}
