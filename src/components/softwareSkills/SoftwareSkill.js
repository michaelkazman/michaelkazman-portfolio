import React from "react";
import "./SoftwareSkill.css";
import Tooltip from "../../components/tooltip/Tooltip.js";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <Tooltip title={logo.skillName} theme={this.props.theme}>
                  <li className="software-skill-inline" name={logo.skillName}>
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </li>
                </Tooltip>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
