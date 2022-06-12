import { Pane, Heading, Button } from 'evergreen-ui';
import { OrderDetails } from './components/order-details-card.component';

export const OrderDetailsScreen = () => {
  return (
    <Pane marginBottom={'4rem'}>
      <Heading fontSize={'2rem'} fontWeight={'700'} textTransform={'uppercase'} color={'#3e4152'}>
        Order ID
      </Heading>
      <Pane background='white' marginTop={'2rem'}>
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
        <OrderDetails />
        <Button appearance='primary' background={'#F3640B'} color={'#fff'} width={'100%'} marginTop={'2rem'}>
          Mark as Done
        </Button>
      </Pane>
    </Pane>
  );
};
