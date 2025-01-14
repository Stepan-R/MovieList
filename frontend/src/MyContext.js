import { createContext, useEffect, useState } from "react";
import * as api from '../src/api/movies.js';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    api.getAll()
      .then(setMovies);
  }

  useEffect(() => {
    loadMovies();
  });

  const remove = (id) => {
    api.remove(id);
    loadMovies();
  };

  return (
    <MyContext.Provider value={{ movies, setMovies, remove }}>
      {children}
    </MyContext.Provider>
  )
}