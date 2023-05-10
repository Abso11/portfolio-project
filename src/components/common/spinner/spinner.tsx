import { SpinnerCircle, SpinnerWrapper } from './spinner.styled';

interface SpinnerProps {
  message?: string;
  inline?: boolean;
  className?: string;
}

const Spinner = ({ message, inline, className }: SpinnerProps): JSX.Element => (
  <SpinnerWrapper data-testid='spinner' inline={inline} className={className}>
    <SpinnerCircle hasMessage={!!message} />
    {message ? <p>{message}</p> : undefined}
  </SpinnerWrapper>
);

export default Spinner;
