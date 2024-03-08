import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "../components/Error"


function Formulario() {

  const { datos, handleChangeDatos, error, setError, valorizarSeguro } = useCotizador()

  const handleSubmit = e => {
    e.preventDefault()
    
    if (Object.values(datos).includes('')) {
      setError('Todos los campos son oblifatorios')
      return
    }

    setError('')
    valorizarSeguro()

  }
 
  return (
    <>
      {error && <Error />}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Marca
          </label>
          <select 
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
            onChange={e => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Selecciona Marca --</option>
            {MARCAS.map(marca => (
              <option key={marca.id} value={marca.id}>{marca.nombre}</option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Año
          </label>
          <select 
            name="year"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
            onChange={e => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">-- Selecciona Año --</option>
            {YEARS.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Elige un Plan
          </label>
          <div className="grid gap-3 grid-cols-4">
              {PLANES.map(plan => (
                <Fragment key={plan.id}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value={plan.id}
                    onChange={e => handleChangeDatos(e)}
                  />
                  <label>{plan.nombre}</label>
                </Fragment>
              ))}
          </div>
        </div>
        <input type="submit" className="w-full bg-green-500 hover:bg-green-700 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-lg" value="Valorar"/>
      </form>
    </>
  )
}

export default Formulario