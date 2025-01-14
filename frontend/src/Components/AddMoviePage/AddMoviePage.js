import { useContext, useState } from 'react';
import './AddMoviePage.scss';
import { MyContext } from '../../MyContext.js';
import * as api from '../../api/movies.js';

export const AddMoviePage = () => {
  const { movies, setMovies } = useContext(MyContext);

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');
  const [actors, setActors] = useState('');
  const [description, setDescription] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [time, setTime] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'rate':
        setRating(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'actors':
        setActors(value);
        break;
      case 'description':
        setDescription(value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMovie = await api.add(
      title,
      rating,
      year,
      actors,
      description,
      director,
      genre,
      time,
    )

    setMovies([...movies, newMovie]);

    setTitle('');
    setRating('');
    setYear('');
    setActors('');
    setDescription('');
    setDirector('');
    setGenre('');
    setTime('');
  }

  return (
    <div className='add_movie_layout'>
      <h1 className="add_title">Add a movie to your list</h1>
      <div className='add_info_block'>
        <form className="add_info_block" onSubmit={handleSubmit}>
          <input  
            name='title' 
            type='text' 
            className='add_input' 
            placeholder="Please add a title"
            value={title}
            onChange={handleInputChange}
          >
          </input>
          <input  
            name='rate' 
            type='text' 
            className='add_input' 
            placeholder="Please add rating"
            value={rating}
            onChange={handleInputChange}
          >
          </input>
          <input  
            name='year' 
            type='text' 
            className='add_input' 
            placeholder="Please add release year"
            value={year}
            onChange={handleInputChange}
          >
          </input>
          <input  
            name='actors' 
            type='text' 
            className='add_input' 
            placeholder="Please add movie cast"
            value={actors}
            onChange={handleInputChange}
          >
          </input>
          <textarea  
            name='description' 
            type='text' 
            className='add_textarea' 
            placeholder="Please add overview of the movie"
            value={description}
            onChange={handleInputChange}
          >
          </textarea>
          <input  
            name='director' 
            type='text' 
            className='add_input' 
            placeholder="Please add movie director"
            value={director}
            onChange={handleInputChange}
          >
          </input>
          <input  
            name='genre' 
            type='text' 
            className='add_input' 
            placeholder="Please add movie genre"
            value={genre}
            onChange={handleInputChange}
          >
          </input>
          <input  
            name='time' 
            type='text' 
            className='add_input' 
            placeholder="Please add movie time"
            value={time}
            onChange={handleInputChange}
          >
          </input>
          <button className='add_movie_button' onSubmit={handleSubmit} >Add Movie</button>
        </form>
      </div>
    </div>
  )
}