import { Pane, Button, Image, TextInput, IconButton, PlusIcon, MinusIcon } from 'evergreen-ui';
import { useState } from 'react';
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
  .price {
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

export const StyledInput = styled.input`
  width: 40px;
  border: 1px solid rgba(40, 44, 63, 0.45);
  color: rgba(40, 44, 63, 0.45);
  height: 32px;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.6rem;
`;

export const CartCard = () => {
  const [count, setCount] = useState(0);
  console.log('count', count);
  return (
    <Pane display={'flex'} background={'white'} padding={'2rem'} borderColor={'rgb(150 170 180 / 50%)'}>
      <MetaContainer>
        <Pane display={'flex'} alignItems={'center'} justify={'center'} gap={'1rem'}>
          <Image src='./image/icons/veg.svg' height={18} />
          <h3 className='best-seller'>Best Seller</h3>
        </Pane>
        <h2 className='title'>Noodles</h2>
        <h3 className='price'>Rs 300</h3>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident?
        </p>
        <Button marginTop={'2rem'}>Remove</Button>
      </MetaContainer>
      <Pane>
        <Image
          src={
            'https://b.zmtcdn.com/data/dish_photos/48e/0ddd3a4ff5ab5a134fe28928c91e048e.jpg?fit=around|130:130&crop=130:130'
          }
          width={'12.0rem'}
          height={'12.0rem'}
          borderRadius={'5px'}
        />
        <Pane display='flex' alignItems={'center'} justifyContent={'center'} gap={'0.8rem'} marginTop={'1rem'}>
          <IconButton color={'green'} intent='success' icon={PlusIcon} />
          <StyledInput
            className='count'
            type='text'
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder='0'
            width={'2rem'}
            color={'grey'}
          />
          <IconButton intent='danger' icon={MinusIcon} />
        </Pane>
      </Pane>
    </Pane>
  );
};
