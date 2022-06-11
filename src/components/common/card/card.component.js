import { Pane, Image, Button, TextInput } from 'evergreen-ui';
import { MetaContainer } from './card.component.styles';

export const Card = () => {
  return (
    <Pane display={'flex'} background={'white'} padding={'2rem'}>
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
      </MetaContainer>
      <Pane>
        <Image
          src={
            'https://b.zmtcdn.com/data/dish_photos/48e/0ddd3a4ff5ab5a134fe28928c91e048e.jpg?fit=around|130:130&crop=130:130'
          }
          width={'12.0rem'}
          height={'12.0rem'}
        />
        <Pane display='flex' alignItems={'center'} justifyContent={'center'} gap={'0.8rem'} marginTop={'1rem'}>
          <Button>+</Button>
          <TextInput name='text-input-name' placeholder='0' width={'2rem'} />
          <Button>-</Button>
        </Pane>
      </Pane>
    </Pane>
  );
};
