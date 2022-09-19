import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Result } from 'page';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
