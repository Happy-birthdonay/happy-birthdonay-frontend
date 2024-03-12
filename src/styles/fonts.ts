import { css } from 'styled-components';

export const TYPOGRAPHY_STYLES = {
  Headline1_B: {
    fontSize: 38,
    lineHeight: 'auto',
    fontWeight: 600,
  },
  Headline2_B: {
    fontSize: 32,
    lineHeight: 'auto',
    fontWeight: 600,
  },
  Headline3_B: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 600,
  },
  Headline3_M: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: 400,
  },
  // button placeholder
  Body1_B: {
    fontSize: 21,
    lineHeight: 24,
    fontWeight: 600,
  },
  Body1_M: {
    fontSize: 21,
    lineHeight: 24,
    fontWeight: 400,
  },
  //button subText
  Body2_B: {
    fontSize: 17,
    lineHeight: 10,
    fontWeight: 600,
  },
  Body2_M: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 400,
  },
  //message
  Caption_M: {
    fontSize: 16,
    lineHeight: 25.6,
    fontWeight: 400,
  },
};

export const getTypographyStyles = (typography: keyof typeof TYPOGRAPHY_STYLES) => {
  const { fontSize, lineHeight, fontWeight } = TYPOGRAPHY_STYLES[typography];
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeight};
  `;
};
