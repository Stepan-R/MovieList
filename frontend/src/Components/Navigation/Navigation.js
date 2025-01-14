import './Navigation.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="navigation-layout">
      <h1 className='nav_title'>MovieList</h1>
      <div className='nav_links'>
        <NavLink to="/" className='nav_link'>
          <img src='./home.svg' alt='logo'></img>
          <span className='nav_link_text'>Home</span>
        </NavLink>
        <NavLink to="/favorites" className='nav_link'>
          <img src='./fav.svg' alt='logo' className='fav_icon'></img>
          <span className='nav_link_text'>Favorites</span>
        </NavLink>
      </div>
      <div className='add_button_block'>
        <NavLink to="/addmovie" className='add_button'>Add a movie</NavLink>
      </div>
    </div>
  );
}