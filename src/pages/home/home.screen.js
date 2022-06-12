import styled from 'styled-components';
import { Heading, Pane } from 'evergreen-ui';
import { Card } from '../../components';
import { StatsCard } from './components/stats-card/stats-card.component';
import { useNavigate } from 'react-router-dom';
export const HomeScreenContainer = styled.div`
  padding: 2rem;
  .stats-card {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 4rem;
  }
`;

export const HomeScreen = () => {
  const navigate = useNavigate();
  const id = 2; //replace later
  return (
    <HomeScreenContainer>
      <Heading paddingLeft={'4rem'} fontSize={'2rem'} fontWeight={'700'} textTransform={'uppercase'} color={'#3e4152'}>
        Hello, Koushith👋
      </Heading>
      <Pane className='stats-card'>
        <StatsCard status='Pending' tableNumber='02' onClick={() => navigate(`/order/${id}`)} />
        <StatsCard status='Prepared' tableNumber='05' onClick={() => navigate(`/order/${id}`)} />
        <StatsCard status='Prepared' tableNumber='09' />
        <StatsCard status='Pending' tableNumber='07' />
        <StatsCard status='Pending' tableNumber='08' />
        <StatsCard status='Prepared' tableNumber='04' />
        <StatsCard status='Pending' tableNumber='01' />
        <StatsCard />
      </Pane>
    </HomeScreenContainer>
  );
};
