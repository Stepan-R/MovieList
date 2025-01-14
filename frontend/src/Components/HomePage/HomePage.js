import { useContext, useState } from 'react';
import { Card } from '../Card/Card'
import './HomePage.scss'
import { useSearchParams } from 'react-router-dom';
import { MyContext } from '../../MyContext.js';

export const HomePage = () => {
  const { movies } = useContext(MyContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sortBy') || 'all';

  const [query, setQuery] = useState('');

  const queriedMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

  function handleSortOfMovies(e) {
    const params = new URLSearchParams(searchParams);

    params.set('sortBy', e.target.value);
    setSearchParams(params);
  }

  const sortedMovies = [...queriedMovies].sort((a, b) => {
    switch (sort) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'rating':
        return a.rating - b.rating;
      case 'year':
        return a.year - b.year;
      default:
        return 0;
    }
  })

  return (
    <div className='home_layout'>
      <h1 className='home_title'>Make your evening with the best movies</h1>
      <div className='filter_block'>
        <input 
          value={query}
          type='text' 
          placeholder='Filter by movie title...' 
          className='input_filter'
          onChange={e=> setQuery(e.target.value)}
        ></input>
        <select 
          className='select_filter' 
          onChange={handleSortOfMovies}
          value={sort}
        >
          <option value='all'>All</option>
          <option value='title'>Title</option>
          <option value='rating'>Rating</option>
          <option value='year'>Year</option>
        </select>
      </div>
      <div className='carts_layout'>
        {sortedMovies.map(movie => (
          <Card movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  )
}