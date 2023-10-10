import React, { useState } from 'react';
import { ExpandArrow, Link, ListItem } from './menu-item.styled';
import { Props } from './menu-item.types';

export const MenuItem = ({ title, isActive, subMenu, icon, iconActive, onClick, disabled }: Props): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = (): void => {
    if (!disabled && subMenu) setIsExpanded(!isExpanded);
    else if (!disabled && onClick) onClick();
  };

  // eslint-disable-next-line no-nested-ternary
  const isLinkActive = subMenu ? (isExpanded ? false : isActive) : isActive;

  return (
    <ListItem $isExpandable={isLinkActive} onClick={handleClick} aria-label={title}>
      <Link
        isActive={isLinkActive}
        disabled={disabled}
        $isExpanded={isExpanded}
        isActiveAndExpanded={isActive && isExpanded}
      >
        {isLinkActive ? iconActive || icon : icon}
        {title}
      </Link>
      {subMenu && <ExpandArrow $isExpanded={isExpanded} $isActive={isActive} />}
      {subMenu && isExpanded && <ul onClick={(e) => e.stopPropagation()}>{subMenu}</ul>}
    </ListItem>
  );
};
