import styled from 'styled-components';
import { Pane } from 'evergreen-ui';

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
