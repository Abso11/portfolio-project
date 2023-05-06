import styled from 'styled-components';
import { mediaQuery, media } from 'styles';

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${mediaQuery.phone} {
    width: auto;
    margin-bottom: 10px;
  }

  .ant-picker-range {
    border-radius: 4px;
    width: 100%;
    height: 36px;
  }

  .ant-picker-input > input {
    text-align: center;
  }

  ${media.tablet} {
    margin-bottom: 10px;
  }
`;
