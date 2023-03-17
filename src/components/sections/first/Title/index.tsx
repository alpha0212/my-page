import React from 'react';

import * as S from './styled';

interface MyNameProps {
  text: string;
}

export const MyName: React.FC<MyNameProps> = ({ text }) => {
  return <S.MyNameIs>{text}</S.MyNameIs>;
};
