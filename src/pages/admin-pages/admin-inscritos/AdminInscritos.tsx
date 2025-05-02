import React, { useState, useEffect } from 'react'
import inscritosMock from './inscritosMock.json'
import './AdminInscritos.css'

type Inscrito = {
  id: number
  nome: string
  evento: string
  data: string
}

const AdminInscritos = () => {
  const [inscritos, setInscritos] = useState<Inscrito[]>([])

  useEffect(() => {
    setInscritos(inscritosMock as Inscrito[])
  }, [])

  return (
    <div className='admin-inscritos-container'>
      <h2>Inscritos nos Eventos</h2>
      <table className='inscritos-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Evento</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {inscritos.map(inscrito => (
            <tr key={inscrito.id}>
              <td>{inscrito.id}</td>
              <td>{inscrito.nome}</td>
              <td>{inscrito.evento}</td>
              <td>{inscrito.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminInscritos
