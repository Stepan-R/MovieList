import { AddMoviePage } from "./Components/AddMoviePage/AddMoviePage";
import { FavPage } from "./Components/FavPage/FavPage";
import { HomePage } from "./Components/HomePage/HomePage";
import { Navigation } from "./Components/Navigation/Navigation";
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { CardDetail } from "./Components/CardDetail/CardDetail";
import { MyProvider } from "./MyContext";

export const App = () => {
  return (
    <div className="app_layout">
      <MyProvider>
        <Navigation />
        <Routes>
          <Route path="/" >
            <Route index element={
              <HomePage />} 
            />
            <Route path=":movieId" element={<CardDetail />}/>
          </Route>
          <Route path="/favorites" element={<FavPage />} />
          <Route path="/addmovie" element={<AddMoviePage />} />
        </Routes>
      </MyProvider>
    </div>
  );
}
