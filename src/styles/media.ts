const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1700),
  tablet: customMediaQuery(992),
  phone: customMediaQuery(576)
};
