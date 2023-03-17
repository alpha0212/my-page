import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavbarWrapper = styled.nav<{
  scrollShowNav: boolean;
}>`
  width: 100%;
  height: 13vh;
  top: ${(props) => (props.scrollShowNav ? 0 : '-13vh')};
  position: fixed;

  display: flex;
  background: none;
  transition: top 0.4s ease-out;
`;
export const NavbarLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  margin: auto auto auto 40px;
`;
export const NavbarMenus = styled.div`
  margin: auto 40px auto auto;
`;
export const Menu = styled(NavLink)`
  color: #c7c7c7;
  margin: 0 10px 0 10px;
  text-decoration: none;
`;
