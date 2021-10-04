import React from 'react';
import './Tooltip.css';
import { Tooltip as MUITooltip } from '@mui/material/';

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
