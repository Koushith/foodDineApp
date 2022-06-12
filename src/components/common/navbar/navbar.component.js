import { Avatar, Pane, ShoppingCartIcon } from 'evergreen-ui';
import { Nav } from './navbar.component.styles';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Nav display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
      <Pane className='nav-container'>
        <ShoppingCartIcon
          cursor={'pointer'}
          color='muted'
          size={40}
          marginRight={'2rem'}
          onClick={() => navigate('/cart')}
        />
        <span className='count'>2</span>
        <Avatar name='koushith Amin' size={40} />
      </Pane>
    </Nav>
  );
};
