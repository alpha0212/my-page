import React from 'react';

import * as S from './styled';
import { FirstSection, SecondSection } from '../../components';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <FirstSection />
        <SecondSection />
      </S.MainPageContainer>
    </>
  );
};
