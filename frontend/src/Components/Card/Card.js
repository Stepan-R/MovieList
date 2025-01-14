import { useContext } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { MyContext } from '../../MyContext.js';

export const Card = ({ movie }) => {
  const { remove } = useContext(MyContext);

  const removeMovie = (movie) => {
    remove(movie._id);
  };

  return (
    <div className='card_block'>
      <img 
        src='./delete.png'
        alt='delete' 
        className='delete_card' 
        onClick={() => removeMovie(movie)}
      >
      </img>
      <Link to={`/${movie._id}`} className='card_link'>
        <img 
          src='./post.jpg'
          alt='poster'
          className='card_image'
        ></img>
        <p className='card_rate'>{parseFloat(movie.rating)}/100</p>
        <p className='card_title'>{movie.title}</p>
        <p className='card_year'>({parseInt(movie.year, 10)})</p>
      </Link>
    </div>
  )
}