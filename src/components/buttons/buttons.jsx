import React from 'react';
import { BoxButtonCss, BtnCss } from './buttons.styled';

export const Buttons = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <BoxButtonCss>
    <BtnCss type="button" onClick={onIncrementGood}>
      Good
    </BtnCss>
    <BtnCss type="button" onClick={onIncrementNeutral}>
      Neutral
    </BtnCss>
    <BtnCss type="button" onClick={onIncrementBad}>
      Bad
    </BtnCss>
  </BoxButtonCss>
);
