import React from 'react';

import * as S from './styled';
import { MyName, SecondSection, SubName } from '../../components';

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <S.FirstSectionBackground>
          <S.IntroduceMySelf>
            <SubName SubMyName="I AM" />
            <MyName text="Jun Hee" />
            <S.ADescMargin>
              <SubName SubMyName="A JUNIOR FE DEVELOPER" />
            </S.ADescMargin>
          </S.IntroduceMySelf>
        </S.FirstSectionBackground>
        <SecondSection />
      </S.MainPageContainer>
    </>
  );
};
