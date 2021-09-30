import React from "react";
import "./CompetitiveSites.css";
import Tooltip from "../../components/tooltip/Tooltip.js";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <Tooltip title={logo.siteName} theme={this.props.theme}>
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </a>
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
