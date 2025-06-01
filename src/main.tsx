import "./index.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UploadFile } from "./UploadFile";
import { Myfile } from './Myfile';
import { Myfile_menu } from './Myfile_menu';
import { Test } from "./test";
import { Home } from './Home';
import { Login } from './Login';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload_file/:type' element={<UploadFile />} />
        <Route path='/my_file/:type' element={<Myfile />}/>
        <Route path='/my_file_menu' element={<Myfile_menu />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
