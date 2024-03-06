import React from 'react'
import Formulario from './Formulario'

function AppSeguro() {
  return (
    <>
      <header className='my-10'>
        <h1 className='text-slate-800 text-center text-4xl font-black'>Valoracion de Seguros de Coches</h1>
      </header>

      <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
        <Formulario />
      </main>
    </>
  )
}

export default AppSeguro