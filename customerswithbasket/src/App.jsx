import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/homePage'
import DetailPage from './assets/pages/detailPage'
import HeaderComp from './assets/layout/header'
import FooterComp from './assets/layout/footer'
import FavoritesPage from './assets/pages/favoritesPage'

function App() {

  return (
    <div className="App">
      <HeaderComp />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/detail/:id' element={<DetailPage />}></Route>
        <Route path='/favorites' element={<FavoritesPage />}></Route>
      </Routes>
      <FooterComp />
    </div>
  )
}

export default App
