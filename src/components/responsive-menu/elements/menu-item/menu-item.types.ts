export type Props = {
  isActive: boolean;
  title: string;
  subMenu?: JSX.Element;
  icon?: JSX.Element;
  iconActive?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
};
