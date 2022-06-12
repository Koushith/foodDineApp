import { Pane, Button, Image, TextInput, IconButton, PlusIcon, MinusIcon } from 'evergreen-ui';
import { useState } from 'react';
import { MetaContainer, StyledInput } from './card.component.styles';

export const Card = () => {
  const [count, setCount] = useState(0);
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
        <Button appearance='primary' intent='success' marginTop={'1rem'}>
          Add To Cart
        </Button>
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
        {/* <Pane display='flex' alignItems={'center'} justifyContent={'center'} gap={'0.8rem'} marginTop={'1rem'}>
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
        </Pane> */}
      </Pane>
    </Pane>
  );
};
