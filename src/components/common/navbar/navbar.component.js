import { Avatar, Pane, ShoppingCartIcon } from 'evergreen-ui';
import { Nav } from './navbar.component.styles';

export const NavBar = () => {
  return (
    <Nav display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
      <Pane className='nav-container'>
        <ShoppingCartIcon color='muted' size={40} marginRight={'2rem'} />
        <span className='count'>2</span>
        <Avatar name='koushith Amin' size={40} />
      </Pane>
    </Nav>
  );
};
