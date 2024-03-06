import { Fragment } from "react"
import { MARCAS, YEARS, PLANES } from "../constants"


function Formulario() {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Marca
          </label>
          <select 
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
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
            name="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded-lg"
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
          <div className="flex gap-3 items-center">
              {PLANES.map(plan => (
                <Fragment key={plan.id}>
                  <label>{plan.nombre}</label>
                  <input type="radio" name="plan" value={plan.id} />
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