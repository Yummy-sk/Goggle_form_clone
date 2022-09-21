import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Selection, Result } from 'page';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/selection/:id' element={<Selection />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
