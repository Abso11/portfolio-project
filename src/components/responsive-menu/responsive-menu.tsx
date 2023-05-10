import React, { ReactNode } from 'react';
import { LanguageSwitcher } from 'components/common';
import { ToggleButton, MenuItem } from './elements';
import { MenuHeader, Nav, Title, Wrapper, MenuFooter } from './responsive-menu.styled';

export type MenuProps = {
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
          <LanguageSwitcher />
          <p>Paweł Duszeńko</p>
          <p>{new Date().getFullYear()} All rights reserved.</p>
        </MenuFooter>
      </Nav>
    </Wrapper>
  );
};

Menu.MenuItem = MenuItem;
