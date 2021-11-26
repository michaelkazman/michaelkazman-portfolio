import React from 'react';
import './Header.css';
import { Fade } from 'react-reveal';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { greeting, settings } from '../../static/portfolio';
import SeoHeader from '../seoHeader/SeoHeader';
import { selectTheme } from '../../app/theme/themeSlice';
import ThemeToggle from '../themeToggle/ThemeToggle';

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

const Header = () => {
  const theme = useSelector((state) => selectTheme(state));
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
            <ThemeToggle />
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
