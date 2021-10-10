import React from 'react';
import { Tooltip as MUITooltip } from '@mui/material/';
import './Tooltip.css';

const Tooltip = ({ children, title }) => (
  <MUITooltip
    title={title}
    arrow
    placement="bottom"
  >
    {children}
  </MUITooltip>
);

export default Tooltip;
