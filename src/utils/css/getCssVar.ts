const getCssVar = (property: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(property);

export default getCssVar;
