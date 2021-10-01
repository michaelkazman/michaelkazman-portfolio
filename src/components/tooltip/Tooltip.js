import React from "react";
import "./Tooltip.css";
import { OverlayTrigger, Tooltip as BootstrapTooltip } from "react-bootstrap";


export default function Tooltip({ children, title, theme }) {
    return (
        <OverlayTrigger
            placement={"bottom"}
            overlay={
                <BootstrapTooltip
                    className={`tooltip-top`}
                    style={{
                        backgroundColor: theme?.secondaryText || '#000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 4,
                        padding: '4px 8px'
                    }}
                >
                    {title}
                </BootstrapTooltip>
            }
        >
            {children}
        </OverlayTrigger>
    )
}