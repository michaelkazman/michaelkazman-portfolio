import React from 'react';
import './ThemeToggle.css';
import { useSelector, useDispatch } from 'react-redux';
import { themeUpdated, selectThemeId } from '../../app/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const themeId = useSelector((state) => selectThemeId(state));
  const isLightTheme = themeId === 'light';

  return (
    <button
      className="themetoggle-button"
      style={{ backgroundColor: (isLightTheme ? '#80BAA7' : '#292C3F') }}
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
  );
};

export default ThemeToggle;
