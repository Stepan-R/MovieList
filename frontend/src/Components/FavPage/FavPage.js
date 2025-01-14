import { useContext } from "react";
import { Card } from "../Card/Card"
import './FavPage.scss';
import { MyContext } from '../../MyContext.js';

export const FavPage = () => {
  const { movies } = useContext(MyContext);

  const favMovies = movies.filter(film => film.favorite);

  return (
    <div className='fav_layout'>
      <h1 className='fav_title'>Check your Favorites movies</h1>
      <div className='carts_layout'>
        {favMovies.map(movie => (
          <Card movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  )
}