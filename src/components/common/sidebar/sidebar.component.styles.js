import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoContainer = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const CollectionsContainer = styled.nav`
  /* margin-top: 7rem; */
  display: flex;
  align-self: flex-start !important;
`;

export const CategoryHeading = styled.h2`
  color: #72759a;
  margin-bottom: 3rem;
  font-weight: 700;
  font-size: 20px;
`;

export const CollectionLists = styled.div`
  margin-top: 6rem;
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.9rem;
  margin-bottom: 4rem;
  cursor: pointer;
`;

export const AddNewContainer = styled(CategoryHeading)`
  border-top: 1px solid #72759a;
  color: #fff;
  padding-top: 3rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 5rem;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  color: #fff;
`;
