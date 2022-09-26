import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/user/logoutSlice';
import picture from '../assets/images/vespa.png';
import './navbar.scss';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const isAdmin = localStorage.getItem('isAdmin');

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={picture} className="logo" alt="logo" />
          <p className="logo-name">BookRacers</p>
        </Link>
      </div>
      <div className="links-container">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/categories"
            >
              RACERS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/reservations"
            >
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'active link' : 'link')}
              to="/reservations"
            >
              My Reservations
            </NavLink>
          </li>
          {isAdmin === 'true' && (
            <>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active link' : 'link')}
                  to="/add_motorcycle"
                >
                  Add Motorcycle
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active link' : 'link')}
                  to="/addcategory"
                >
                  Add Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active link' : 'link')}
                  to="/delete_motorcycle"
                >
                  Delete a Motorcycle
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active link' : 'link')}
                  to="/delete_category"
                >
                  Delete a Category
                </NavLink>
              </li>
            </>
          )}
          <li>
            <button type="button" className="logoutBtn" onClick={clickHandler}>
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
      <br />
      <p className="copyright">&copy; Racers@Microverse 2022</p>
    </nav>
  );
}

export default Navbar;
