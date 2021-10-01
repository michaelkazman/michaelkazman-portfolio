import React, { Component } from "react";
import "./ProjectLanguages.css";
import Tooltip from "../../components/tooltip/Tooltip.js";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons-languages">
            {this.props.logos.map((logo) => {
              return (
                <Tooltip title={logo.name} theme={this.props.theme}>
                  <li
                    className="software-skill-inline-languages"
                    name={logo.skillName}
                  >
                    <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
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

export default ProjectLanguages;
