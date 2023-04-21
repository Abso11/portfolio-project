import { ReactComponent as SortIconDown } from 'assets/icons/sorting-arrow-down.svg';
import { ReactComponent as SortIconUp } from 'assets/icons/sorting-arrow-up.svg';
import { ColumnType } from 'antd/lib/table';
import { SortOrder } from 'antd/lib/table/interface';
import { OrderDirection } from 'enums/order-direction';
import isEmpty from 'lodash.isempty';
import { FlexContainer, SortIconWrapper } from './column-title.styled';

interface Props {
  name: string;
  sortColumns?: Array<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    column: ColumnType<any>; // exception of linting rule since a generic column component should accept any type
    order: SortOrder;
  }>;
  dataIndex?: string;
  isSortingDisabled?: boolean;
}

const ColumnTitle = ({ name, sortColumns, dataIndex, isSortingDisabled = false }: Props): JSX.Element => {
  const sortedColumn = sortColumns?.find((item) => item.column.dataIndex === dataIndex);
  const isColumnSorted = !isEmpty(sortedColumn);
  const isAscendActive = isColumnSorted && sortedColumn?.order === OrderDirection.ASC;
  const isDescendActive = isColumnSorted && sortedColumn?.order === OrderDirection.DESC;

  return (
    <FlexContainer>
      <p role='columnheader'>{name}</p>
      {!isSortingDisabled && (
        <>
          <SortIconWrapper active={isAscendActive} isFirst>
            {isAscendActive && <SortIconUp />}
          </SortIconWrapper>
          <SortIconWrapper active={isDescendActive}>{isDescendActive && <SortIconDown />}</SortIconWrapper>
        </>
      )}
    </FlexContainer>
  );
};

export default ColumnTitle;
