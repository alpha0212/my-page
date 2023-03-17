import React from 'react';
import styled from '@emotion/styled';

interface SubTextData {
  SubMyName: string;
}

export const SubName: React.FC<SubTextData> = ({ SubMyName }) => {
  return <SubText>{SubMyName}</SubText>;
};

export const SubText = styled.div`
  color: #ababab;
  font-size: 15px;
`;
