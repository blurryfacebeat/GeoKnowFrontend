const getCssVar = (property: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
};

export default getCssVar;
