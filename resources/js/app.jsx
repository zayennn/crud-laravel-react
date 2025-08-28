import ReactDOM from 'react-dom/client'
import '../css/app.css'

import Table from './components/Table'

function App() {
    return (
        <>
            <Table />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>)