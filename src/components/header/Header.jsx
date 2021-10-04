import React from 'react';
import './Header.css';
import { Fade } from 'react-reveal';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { greeting, settings } from '../../static/portfolio';
import SeoHeader from '../seoHeader/SeoHeader';
import { themeUpdated, selectTheme, selectThemeId } from '../../app/theme/themeSlice';

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  if (!el.className.includes('active')) {
    el.style.backgroundColor = 'transparent';
  }
};

const themeIconStyle = (isLightTheme) => ({
  cursor: 'pointer',
  height: '45px',
  width: '45px',
  marginRight: '5px',
  marginLeft: '15px',
  paddingTop: '5px',
  borderRadius: '50%',
  fontSize: '20pt',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: isLightTheme ? '#80BAA7' : '#292C3F',
  outline: 'none',
  transition: 'all 0.2s ease-in-out',
});

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => selectTheme(state));
  const themeId = useSelector((state) => selectThemeId(state));
  const isLightTheme = themeId === 'light';
  const link = settings.isSplash ? '/splash' : 'home';
  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span className="logo-name" style={{ color: theme.text, borderRadius: 5, padding: 0 }}>&lt;</span>
            <span className="logo-name" style={{ color: theme.text, borderRadius: 5 }}>
              {greeting.logo_name}
            </span>
            <span className="logo-name" style={{ color: theme.text, borderRadius: 5, padding: 0 }}>/&gt;</span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          {/* <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon" />
          </label> */}
          <ul className="menu">
            <li>
              <NavLink
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: 'bold', backgroundColor: theme.highlight }}
                style={{ color: theme.text, borderRadius: 5 }}
                className="nav-btn"
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: 'bold', backgroundColor: theme.highlight }}
                style={{ color: theme.text, borderRadius: 5 }}
                className="nav-btn"
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Education
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: 'bold', backgroundColor: theme.highlight }}
                style={{ color: theme.text, borderRadius: 5 }}
                className="nav-btn"
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                tag={Link}
                activeStyle={{ fontWeight: 'bold', backgroundColor: theme.highlight }}
                style={{ color: theme.text, borderRadius: 5 }}
                className="nav-btn"
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/opensource"
                tag={Link}
                activeStyle={{ fontWeight: 'bold', backgroundColor: theme.highlight }}
                style={{ color: theme.text, borderRadius: 5 }}
                className="nav-btn"
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Open Source
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                tag={Link}
                activeStyle={{ fontWeight: 'bold', backgroundColor: theme.highlight }}
                style={{ color: theme.text, borderRadius: 5 }}
                className="nav-btn"
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                Contact
              </NavLink>
            </li>
            <button
              style={{ ...themeIconStyle(isLightTheme) }}
              onClick={() => dispatch(themeUpdated())}
              type="button"
            >
              <i
                className={`fas ${isLightTheme ? 'fa-moon' : 'fa-sun'}`}
                style={{
                  strokeWidth: 1,
                  size: 20,
                  color: isLightTheme ? '#E1ECE8' : '#F9D784',
                }}
              />
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
