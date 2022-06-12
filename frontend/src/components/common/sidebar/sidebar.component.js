import { Pane, Image } from 'evergreen-ui';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, AddIcon, UserIcon } from 'evergreen-ui';
import { useState } from 'react';

import {
  LogoContainer,
  CollectionsContainer,
  CollectionLists,
  StyledNavLink,
  AddNewContainer,
} from './sidebar.component.styles';

export const SideBar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <LogoContainer>Fine Dine</LogoContainer>

      <CollectionsContainer>
        <CollectionLists>
          <StyledNavLink to='/'>
            <Pane display={'flex'} gap={'1rem'} alignItems={'center'}>
              <DashboardIcon color='white' marginRight={1} />
              Dashboard
            </Pane>
          </StyledNavLink>
          <StyledNavLink to='/profile'>
            <Pane display={'flex'} gap={'1rem'} alignItems={'center'}>
              <UserIcon color='white' marginRight={1} />
              Profile
            </Pane>
          </StyledNavLink>
          <StyledNavLink to='/add-item'>
            <Pane display={'flex'} gap={'1rem'} alignItems={'center'}>
              <AddIcon color='white' marginRight={1} />
              Add Items
            </Pane>{' '}
          </StyledNavLink>
        </CollectionLists>
      </CollectionsContainer>

      <AddNewContainer></AddNewContainer>
    </>
  );
};
