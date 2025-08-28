import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../css/app.css'

import Home from './pages/Index'    
import Create from './pages/Create'
import Edit from './pages/Edit'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                </Routes>
            </Router>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>)