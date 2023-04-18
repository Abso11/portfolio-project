const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1728),
  tabletLarge: customMediaQuery(1024),
  tabletMini: customMediaQuery(800),
  phone: customMediaQuery(550)
};
