import { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Layout } from './components/Layout'
// import About from './pages/About'
function App() {

  return (
    <Router>
      <Layout>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Suspense>
      </Layout>
    </Router>
  )
}

export default App
