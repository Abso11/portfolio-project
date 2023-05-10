import { ReactNode } from 'react';
import { ErrorOverlay } from '../error-overlay';
import Spinner from '../spinner/spinner';

type Props = {
  isError: boolean;
  isLoading: boolean;
  refetch: () => void;
  isSmallTile?: boolean;
  noData?: boolean;
  noDataComponent?: JSX.Element;
  children: ReactNode;
};

const ContentWrapper = ({
  children,
  isError,
  isLoading,
  refetch,
  isSmallTile,
  noData,
  noDataComponent
}: Props): JSX.Element => (
  <>
    {isLoading && <Spinner />}
    {isError && !isLoading && !isSmallTile && <ErrorOverlay onClick={refetch} />}
    {!isError && !isLoading && (
      <>
        <div data-testid='content-wrapper' style={{ display: 'none' }} />
        {noData ? noDataComponent : children}
      </>
    )}
  </>
);

export default ContentWrapper;
