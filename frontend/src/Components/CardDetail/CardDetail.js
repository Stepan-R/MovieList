import { useParams } from 'react-router-dom';
import './CardDetail.scss';
import { useContext, useState } from 'react';
import { MyContext } from '../../MyContext.js';
import * as api from '../../api/movies.js';

export const CardDetail = () => {
  const { movies, setMovies } = useContext(MyContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const { movieId } = useParams();

  function getCurrectMovie(id) {
    return (
      movies.find(movie => movie._id === id)
    );
  }

  function getCurrentMovie() {
    if (!movieId) {
      return;
    }

    return getCurrectMovie(movieId);
  }

  const currentMovie = getCurrentMovie();

  const [title, setTitle] = useState(currentMovie.title);
  const [rating, setRating] = useState(currentMovie.rating);
  const [year, setYear] = useState(currentMovie.year);
  const [cast, setCast] = useState(currentMovie.actors);
  const [overview, setOverview] = useState(currentMovie.description);
  const [director, setDirector] = useState(currentMovie.director);
  const [genre, setGenre] = useState(currentMovie.genre);
  const [time, setTime] = useState(currentMovie.time);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'rating':
        setRating(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'cast':
        setCast(value);
        break;
      case 'overview':
        setOverview(value);
        break;
      case 'director':
        setDirector(value);
        break;
      case 'genre':
        setGenre(value);
        break;
      case 'time':
        setTime(value);
        break;
      default:
        break;
    }
  };
  
  const addtoFav = async (status) => {
    try {
      const updatedMovie = await api.update(
        movieId,
        title,
        rating,
        year,
        cast,
        overview,
        director,
        genre,
        time,
        status
      );

      const updatedMovies = movies.map(movie => 
        movie._id === updatedMovie.movieId ? updatedMovie : movie
      );
  
      setMovies(updatedMovies);
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMovie = api.update(
      movieId,
      title,
      rating,
      year,
      cast,
      overview,
      director,
      genre,
      time,
    );

    const updatedMovies = movies.map(movie => 
      movie._id === updatedMovie.movieId ? updatedMovie : movie
    );

    setMovies(updatedMovies);
    setIsUpdating(false);
  }

  return (
    <div className="detail_layout">
      {isUpdating ? (
        <form onSubmit={handleSubmit}>
          <div className='detail_main_block'>
          <img
            src="./bigImg.png"
            alt="moviePhoto"
            className="detail_image"
          >
          </img>
          <div className="detail_info">
            <div className='title_year_block'>
              <input  
                name='title' 
                type='text' 
                className='update_input' 
                value={title}
                onChange={handleInputChange}
                placeholder="Please add a title"
              >
              </input>
              <input  
                name='year' 
                type='text' 
                className='update_input' 
                value={year}
                onChange={handleInputChange}
                placeholder="Please add a year"
              >
              </input>
            <div/>
          </div>
          <div className='genre_time_block'>
              <input  
                name='genre' 
                type='text' 
                className='update_input' 
                value={genre}
                onChange={handleInputChange}
                placeholder="Please add movie genre"
              >
              </input>
              <input  
                name='time' 
                type='text' 
                className='update_input' 
                value={time}
                onChange={handleInputChange}
                placeholder="Please add movie time"
              >
              </input>
          </div>
            <input  
              name='director' 
              type='text' 
              className='update_input' 
              value={director}
              onChange={handleInputChange}
              placeholder="Please add movie director"
            >
            </input>

          <div className='overview_block'>
            <p className='detail_overview_title'>Overview:</p>
            <textarea  
              name='overview' 
              type='text' 
              className='update_textarea' 
              value={overview}
              onChange={handleInputChange}
              placeholder="Please add overview of the movie"
            >
            </textarea>
          </div>
          <div className='score_block'>
            <p className='detail_score_title'>Score:</p>
              <input  
                name='rating' 
                type='text' 
                className='update_input' 
                value={rating}
                onChange={handleInputChange}
                placeholder="Please add rating"
            >
            </input>
          </div>
          <div className='detail_buttons'>
            <button 
              className='detail_add_to_fav'
              onClick={handleSubmit}
            >
              Update the movie
            </button>
          </div>
        </div>
      </div>
      <div className="detail_cast_block">
        <p className='detail_cast_title'>Cast:</p>
        <input  
          name='cast' 
          type='text' 
          className='add_input' 
          value={cast}
          onChange={handleInputChange}
          placeholder="Please add movie cast"
        >
        </input>
      </div>
      </form>
      ) : (
        <>
        <div className='detail_main_block'>
              <img
                src="./post.jpg"
                alt="moviePhoto"
                className="detail_image"
              ></img>

            <div className="detail_info">
              <div className='title_year_block'>
                <p className='detail_title'>{currentMovie.title}</p>
                <p className='detail_year'>({currentMovie.year})</p>
              </div>
              <div className='genre_time_block'>
                <p className='detail_genre_and_time'>{currentMovie.genre}</p>
                <p className='detail_genre_and_time'>{currentMovie.time}</p>
              </div>
                <p className='detail_director'>Director: {currentMovie.director}</p>
              <div className='overview_block'>
                <p className='detail_overview_title'>Overview:</p>
                  <p className='detail_overview_info'>
                    {currentMovie.description}
                  </p>
              </div>
              <div className='score_block'>
                <p className='detail_score_title'>Score:</p>
                <p className='detail_score_number'>{currentMovie.rating}</p>
              </div>
              <div className='detail_buttons'>
                {currentMovie.favorite ? (
                  <button
                  className='detail_add_to_fav'
                  onClick={() => addtoFav(false)}
                >
                  Remove from Favorites
                </button>
                ) : (
                <button
                  className='detail_add_to_fav'
                  onClick={() => addtoFav(true)}
                >
                  Add to Favorites
                </button>
                )}
                <button
                  className='detail_add_to_fav'
                  onClick={() => setIsUpdating(true)}
                >
                  Edit the movie
                </button>
              </div>
            </div>
          </div><div className="detail_cast_block">
              <p className='detail_cast_title'>Cast:</p>
              <p className='detail_cast'>{currentMovie.actors}</p>
            </div>
        </>
      )}
    </div>
  )
}