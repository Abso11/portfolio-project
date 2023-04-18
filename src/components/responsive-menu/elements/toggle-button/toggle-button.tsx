import React from 'react';
import { Wrapper } from './toggle-button.styled';
import { Props } from './toggle-button.types';

export const ToggleButton = ({ onClick, isOpened }: Props): JSX.Element => (
  <Wrapper onClick={onClick} isOpened={isOpened} aria-label='toggle-button'>
    <div onClick={onClick} />
    <div onClick={onClick} />
    <div onClick={onClick} />
  </Wrapper>
);
