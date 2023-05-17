import styled, { css } from 'styled-components';
import { mediaQuery } from 'styles';

const PageContentWrapper = styled.main`
  ${({
    theme: {
      spacing: { space_24 }
    }
  }) => css`
    padding: 88px ${space_24} ${space_24};

    ${mediaQuery.tabletMini} {
      padding: ${space_24} ${space_24} ${space_24} 227px;
    }

    ${mediaQuery.desktop} {
      padding: ${space_24} ${space_24} ${space_24} 270px;
    }
  `}
`;

export { PageContentWrapper };
