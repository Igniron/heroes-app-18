import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { HeroesAppMain } from './HeroesAppMain'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesAppMain/>
    </BrowserRouter>
  </React.StrictMode>
)
