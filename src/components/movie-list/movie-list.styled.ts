import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const TableWrapper = styled.div`
  margin-bottom: 80px;
  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr.ant-table-row.even:hover > td,
  .ant-table-tbody > tr.ant-table-row.odd:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background-color: ${({ theme }) => theme.colors.blueLight};
  }

  .ant-table-column-sorter {
    opacity: 0;
  }

  tr.ant-table-row.odd td.ant-table-cell {
    background-color: ${({ theme }) => theme.colors.greyTable};
    border: 0;
  }

  .ant-table-empty .ant-table-tbody > tr td,
  .ant-table-expanded-row.even tr,
  .ant-table-expanded-row.even td,
  .ant-table-row.even td,
  .ant-table-expanded-row-level-1 td,
  tr.ant-table-expanded-row.even td.ant-table-cell,
  .ant-table-thead th.ant-table-cell,
  .ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-left:hover,
  .ant-table-thead th.ant-table-column-has-sorters.ant-table-cell-fix-right:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 0;
  }

  th.ant-table-cell {
    white-space: nowrap;
  }

  td.ant-table-cell {
    p {
      overflow: hidden;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .ant-table-column-sorters {
    display: inline-flex;
    padding-top: 0;
    padding-bottom: 0;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    padding-left: 0;
  }

  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > th,
  .ant-table tfoot > tr > td {
    padding: 7px ${({ theme }) => theme.spacing.space_16};

    &:first-child {
      padding: 11px 0;
    }
  }
`;

export const ExpandSwitch = styled.div<{ isExpanded: boolean }>`
  svg {
    transform: ${({ isExpanded }) => `rotate(${isExpanded ? 90 : 0}deg)`};
  }
`;

export const PaginationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme: { spacing } }) => `18px ${spacing.space_12}`};
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.borderGrey};

  ${mediaQuery.tabletMini} {
    left: 206px;
    width: calc(100% - 206px);
  }

  ${mediaQuery.desktop} {
    left: 247px;
    width: calc(100% - 247px);
  }

  .ant-pagination {
    display: flex;
    justify-content: center;

    .ant-pagination-options {
      position: absolute;
      left: 6px;
    }

    .ant-table-pagination {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 15px 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue02};
`;

export const StyledEditButton = styled.div`
  margin-top: 6px;

  :hover {
    cursor: pointer;
  }
`;
