import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import Mahasiswa from "../datas/Mahasiswa"

export default function Index() {

    const [data, setData] = useState(Mahasiswa)
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        const filtered = data.filter(item => {
            return item.nama.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredData(filtered)
    }, [search])

    return (
        <>
            <div className="container">
                <header>
                    <h1>Data Mahasiswa</h1>
                    <div className="content__header">
                        <input type="text" placeholder="Cari data mahasiswa" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Link to="/create">
                            tambah data
                        </Link>
                    </div>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>nama</th>
                            <th>email</th>
                            <th>no hp</th>
                            <th>alamat</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => {
                                return (
                                    <tr key={item.id}>

                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.email}</td>
                                        <td>{item.no_hp}</td>
                                        <td>{item.alamat}</td>
                                        <td className='action'>
                                            <button className='btn__edit'>edit</button>
                                            <button className='btn__delete'>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td className='not__found' colSpan="6">data tidak ditemukan</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}