import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import searchBtn from '../images/searchIcon.svg';
import profileBtn from '../images/profileIcon.svg';
import '../assets/header.css';
import UserContext from '../context/UserContext';

function Header(props) {
  const match = useRouteMatch();
  const history = useHistory();
  const {
    handleSerchBar,
  } = useContext(UserContext);

  const { title } = props;

  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <header className="header">

      <button
        onClick={ handleClick }
        type="button"
        className="button-header"
      >
        <img data-testid="profile-top-btn" src={ profileBtn } alt="search" />
      </button>

      <h1 data-testid="page-title">{ title }</h1>

      {
        ((!match.path.includes('/explore')
        && !match.path.includes('/profile')
        && !match.path.includes('/favorite-recipes')
        && !match.path.includes('/done-recipes'))
        || match.path.includes('nationalities')) && (
          <button
            type="button"
            className="button-header"
            onClick={ handleSerchBar }
          >
            <img data-testid="search-top-btn" src={ searchBtn } alt="search" />
          </button>
        )
      }

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
