import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import { UploadFile } from "./UploadFile";
import { Myfile } from './Myfile';
import { Myfile_menu } from './Myfile_menu';
import { Test } from "./test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Home';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload_file/:type' element={<UploadFile />} />
        <Route path='/my_file/:type' element={<Myfile />}/>
        <Route path='/my_file_menu' element={<Myfile_menu />}/>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
