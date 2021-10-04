import React from 'react';
import './Tooltip.css';
import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

const Tooltip = ({ children, title, theme }) => (
  <OverlayTrigger
    placement="bottom"
    overlay={(
      <BootstrapTooltip
        className="tooltip-top"
        style={{
          backgroundColor: theme?.secondaryText || '#000',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '4px 8px',
        }}
      >
        {title}
      </BootstrapTooltip>
    )}
  >
    {children}
  </OverlayTrigger>
);

export default Tooltip;
