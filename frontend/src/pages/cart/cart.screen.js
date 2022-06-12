import { Pane, Heading } from 'evergreen-ui';
import { Card } from '../../components';
import { CartCard } from './components/cart-items/cart-card';
import { ProductSummary } from './components/product-summary/product.component';

export const CartScreen = () => {
  return (
    <Pane display={'flex'} gap={'4rem'} justify={'center'}>
      <Pane display={'flex'} flexDirection={'column'} gap={'2rem'}>
        <Heading
          marginBottom={'2rem'}
          fontSize={'2rem'}
          fontWeight={'700'}
          textTransform={'uppercase'}
          color={'#3e4152'}
        >
          My Cart
        </Heading>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </Pane>
      <Pane marginTop={'4rem'}>
        <Heading
          textAlign={'center'}
          marginBottom={'2rem'}
          fontSize={'2rem'}
          fontWeight={'700'}
          textTransform={'uppercase'}
          color={'#3e4152'}
        >
          Order Summary
        </Heading>
        <ProductSummary />
      </Pane>
    </Pane>
  );
};
