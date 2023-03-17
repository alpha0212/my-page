import React from 'react';

import * as S from './styled';

interface NavbarDataProps {
  Logo: string;
  Project: string;
  Contact: string;
  ProjectGo: string;
  ContactGo: string;
  NavbarShowAndHide: boolean;
}

export const Navbar: React.FC<NavbarDataProps> = ({
  Logo,
  Project,
  Contact,
  ProjectGo,
  ContactGo,
  NavbarShowAndHide,
}) => {
  return (
    <S.NavbarWrapper scrollShowNav={NavbarShowAndHide}>
      <S.NavbarLogo>{Logo}</S.NavbarLogo>
      <S.NavbarMenus>
        <S.Menu to={ProjectGo}>{Project}</S.Menu>
        <S.Menu to={ContactGo}>{Contact}</S.Menu>
      </S.NavbarMenus>
    </S.NavbarWrapper>
  );
};
