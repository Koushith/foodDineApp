import styled from 'styled-components';
import { Pane } from 'evergreen-ui';

export const ProductSummaryContainer = styled(Pane)`
  background: #fff;
  li {
    list-style: none;
  }
  .summary_container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 2rem;
    height: fit-content;
    background-color: white;
    border-radius: 0.5rem;
  }

  .summary_heading {
    color: #3e4152;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  .summary_details {
    border-top: 1px solid gray;
    padding-top: 0.5rem;
  }

  .summary_details ul {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    align-items: center;
  }

  .summary_details p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: 400;
    color: #334155;
  }

  .total_amount {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
  }

  .total_amount h4 {
    color: #3e4152;
    font-size: 1.8rem;
    font-weight: 700;
  }

  .summary_text {
    font-size: 1.8rem;
    line-height: 2.8rem;
    font-weight: 400;
    color: #334155;
    margin-top: 1rem;
  }
`;
