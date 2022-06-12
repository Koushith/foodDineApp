import { Button, Pane } from 'evergreen-ui';
import { ProductSummaryContainer } from './product.component.styles';

export const ProductSummary = () => {
  return (
    <ProductSummaryContainer className='summary_container' padding={'2rem'}>
      <h4 className='summary_heading'>PRICE DETAILS</h4>

      <Pane className='summary_details' marginTop={'2rem'} marginBottom={'2rem'}>
        <li>
          <ul>
            <p>Price (5 items)</p>
            <p>Rs. 2500</p>
          </ul>
          <ul>
            <p>Total Discount</p>
            <p>50</p>
          </ul>
          <ul>
            <p>Discounted Price</p>
            <p>80</p>
          </ul>
          <ul>
            <p>Delivery Charges</p>
            <p>FREE</p>
          </ul>
        </li>
      </Pane>

      <ul className='total_amount'>
        <h4>Total Amount</h4>
        <h4>Rs.500</h4>
      </ul>

      <p className='summary_text'>You will save Rs. 80 on this order</p>

      <Button width={'100%'} appearance='primary' intent='success' marginTop={'1rem'}>
        Place Order
      </Button>
    </ProductSummaryContainer>
  );
};
