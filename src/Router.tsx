import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
