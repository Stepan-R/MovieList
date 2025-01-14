import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3005';

export function getAll() {
  return axios.get('/movies')
  .then(res => res.data);
};

export async function add(
  title,
  rating,
  year,
  actors,
  description,
  director,
  genre,
  time,
) {
  const response = await axios.post('/movies', {
    title,
    rating,
    year,
    actors,
    description,
    director,
    genre,
    time,
  });

  return response.data;
};

export async function update(
  id,
  title,
  rating,
  year,
  actors,
  description,
  director,
  genre,
  time,
  favorite,
) {
  const response = await axios.patch(`/movies/${id}`, {
    title,
    rating,
    year,
    actors,
    description,
    director,
    genre,
    time,
    favorite,
  });

  return response.data;
};

export function remove(id) {
  const response = axios.delete(`/movies/${id}`);

  return response.statusText;
};