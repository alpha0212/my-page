import styled from '@emotion/styled';

export const MainPageContainer = styled.main`
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

export const FirstSectionBackground = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const IntroduceMySelf = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;
`;

export const ADescMargin = styled.div`
  margin: auto 0 auto auto;
`;
