import { css } from '@emotion/react';

import { reset } from './reset';
import { colors } from './colors';

export const globalStyle = css`
  ${reset}
  * {
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      sans-serif;
  }
  body {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: -0.05rem;
    color: ${colors.white};
    background: ${colors.background};
  }
  html {
    font-size: 10px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
