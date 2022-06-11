import { SearchInput, Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  /* display: grid;
  grid-template-columns: 370px 1fr;
  grid-template-rows: auto 1fr; */
  display: flex;
  position: relative;
`;

export const SidePanelContainer = styled.aside`
  background: #171a29;
  color: #ffffff;
  padding: 3.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 37rem;
  min-height: 100vh;
  /* position: fixed; */
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MainContainer = styled.main`
  width: 100%;
  /* display: flex; */
  /* align-items: center;
  justify-content: center;
  flex-direction: column; */
`;

export const NavbarContainer = styled(Pane)`
  /* max-width: 1275px; */
  margin: 2rem 0 2rem 0;
`;
