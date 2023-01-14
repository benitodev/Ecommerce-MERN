import { css, CSSObject } from 'styled-components';

export const mobile = (props: CSSObject) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const desktop = (props: CSSObject) => {
  return css`
    @media only screen and (min-width: 960px) {
      ${props}
    }
  `;
};
