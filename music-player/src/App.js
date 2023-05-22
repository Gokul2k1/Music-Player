import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from './component/Menu'
import About from './component/About'
import Track from './component/Track'
import Music from './component/Music'
import Pnf from './component/pnf'

function App(props) {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
        <Route path={`/`} element={<Music/>} />
        <Route path={`/About`} element={<About/>} />
        <Route path={`/*`} element={<Pnf/>} />
        <Route path={`/Tracks/artist/:id`} element={<Track/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
