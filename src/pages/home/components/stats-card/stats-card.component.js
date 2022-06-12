import { Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const StatsCardContainer = styled(Pane)`
  .table {
    font-size: 1.6rem;
    font-weight: 500;
    color: #93959f;
  }

  .table-number {
    font-size: 4rem;
    font-weight: 700;
    margin-top: 1rem;
    color: #282c3f;
  }
`;

export const StatsCard = ({ status, tableNumber, onClick }) => {
  console.log('status', status);
  return (
    <StatsCardContainer onClick={onClick}>
      <Pane
        background='white'
        display={'flex'}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        padding={'2rem'}
        width={'25rem'}
      >
        <Pane>
          <h3 className='table'>Table</h3>
          <h2 className='table-number'>{tableNumber}</h2>
        </Pane>
        <Pane
          color='white'
          background={status === 'Pending' ? '#EE9C00' : '#60B246'}
          fontSize={'1.4rem'}
          borderRadius={'0.5rem'}
          padding={'0.5rem'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {status}
        </Pane>
      </Pane>
    </StatsCardContainer>
  );
};
