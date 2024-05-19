import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.tsx'
import Home from './pages/Home.tsx'
import Movies from './pages/Movies.tsx'
import Support from './pages/Support.tsx'
import Subscriptions from './pages/Subscriptions'
import Footer from './components/Footer/Footer'
import './assets/scss/main.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/support' element={<Support />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
