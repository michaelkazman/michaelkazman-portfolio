import React, { Component } from "react";
import "./OrganizationList.css";
import Tooltip from "../../components/tooltip/Tooltip.js";
import { Fade } from "react-reveal";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <Tooltip title={logo["login"]}>
              <li className="organizations-inline" name={logo["login"]}>
                <Fade bottom duration={2000} distance="40px">
                  <img
                    className="organizations-img"
                    src={logo["avatarUrl"]}
                    alt={logo["login"]}
                  />
                </Fade>
              </li>
            </Tooltip>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
