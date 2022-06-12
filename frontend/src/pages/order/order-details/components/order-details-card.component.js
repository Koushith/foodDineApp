import { Pane, Image } from 'evergreen-ui';

import styled from 'styled-components';

export const MetaContainer = styled(Pane)`
  .best-seller {
    font-size: 1.6rem;
    font-weight: 500;
    color: #ee9c00;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #3e4152;
    margin-top: 1rem;
  }
  .qty {
    font-size: 1.6rem;
    font-weight: 500;
    color: #3e4152;
    margin-top: 1rem;
  }
  .description {
    font-size: 1.8rem;
    font-weight: 500;
    color: rgba(40, 44, 63, 0.45);
    font-weight: 500;
    margin-top: 1rem;
    width: 40rem;
  }
`;

export const OrderDetails = () => {
  return (
    <Pane display={'flex'} padding={'2rem'} gap={'2rem'} borderBottom={'1px solid #ee9c00'}>
      <Pane>
        <Image
          src={
            'https://b.zmtcdn.com/data/dish_photos/48e/0ddd3a4ff5ab5a134fe28928c91e048e.jpg?fit=around|130:130&crop=130:130'
          }
          width={'12.0rem'}
          height={'12.0rem'}
          borderRadius={'5px'}
        />
      </Pane>
      <MetaContainer>
        <h2 className='title'>Noodles</h2>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident?
        </p>
        <h3 className='qty'>Quantity- 3</h3>
      </MetaContainer>
    </Pane>
  );
};
