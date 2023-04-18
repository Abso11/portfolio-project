import React, { ReactNode } from 'react';
import { ToggleButton } from './elements/toggle-button/toggle-button';
import { MenuItem } from './elements/menu-item/menu-item';
import { MenuHeader, Nav, Title, Wrapper, MenuFooter } from './responsive-menu.styled';

export type MenuProps = {
  /**
   * a node to be rendered in the Menu component. MenuItem component is recommended to use
   */
  children?: ReactNode;
  setIsOpened: (isOpened: boolean) => void;
  isOpened: boolean;
};

export const Menu = ({ children, isOpened, setIsOpened }: MenuProps): JSX.Element => {
  const handleToggleClick = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <Wrapper>
      <MenuHeader>
        <Title>Portfolio Project</Title>
        <ToggleButton onClick={handleToggleClick} isOpened={isOpened} />
      </MenuHeader>
      <Nav isOpened={isOpened}>
        <ul>{children}</ul>
        <MenuFooter>
          <p>Paweł Duszeńko</p>
          <p>{new Date().getFullYear()} All Rights Reserved.</p>
        </MenuFooter>
      </Nav>
    </Wrapper>
  );
};

Menu.MenuItem = MenuItem;
