import { SearchInput, Pane } from 'evergreen-ui';
import styled from 'styled-components';

export const Input = styled(SearchInput)`
  min-width: 56rem;
`;

export const Nav = styled(Pane)`
  max-width: 1200px;
  margin: 0 auto;

  .nav-container {
    position: relative;
    .count {
      align-items: center;
      background-color: #ee9c00;
      border-radius: 100%;
      color: #fff;
      display: inline-flex;
      font-size: 1.2rem;
      font-weight: 500;
      height: 21px;
      justify-content: center;
      padding: 1rem;
      position: absolute;
      right: 50%;
      top: 40%;
      width: 21px;
    }
  }
`;
