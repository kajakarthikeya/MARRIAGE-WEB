export function handleSkipToContent(targetId: string = 'main-content') {
  const target = document.getElementById(targetId);
  if (target) {
    target.tabIndex = -1;
    target.focus();
  }
}

export function getAriaExpanded(isOpen: boolean): { 'aria-expanded': boolean } {
  return { 'aria-expanded': isOpen };
}
