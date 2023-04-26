import { createGlobalStyle } from 'styled-components';
import { antdTable, antdPagination } from './components';

export default createGlobalStyle`
  ${antdTable}
  ${antdPagination}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }


  body {
    background: ${({ theme }) => theme.colors.greyTable};
    overflow-x: hidden;
    overscroll-behavior: none;
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    transition: .5s;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue01};
    text-decoration: none;
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    line-height: 24px;
  }

  h3 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 98%;
  }

  h4 {
    font-size: 2rem;
    font-weight: 700;
  }

  h5 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  li {
    margin-left: 20px;
  }

  img {
    display: block;
    object-fit: cover;
    max-width: 100%;
  }

  p {
    line-height: 24px;
    margin-bottom: 0;
  }

  li {
    line-height: 1.6;
  }

  strong {
    font-size: inherit;
  }

  b {
    font-size: inherit;
  }

  .ant-divider-horizontal {
    margin: 0;
  }
`;
