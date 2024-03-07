import { useState, createContext } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  
  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false)
  
  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const valorizarSeguro = () => {
    let resul = 2000

    const diferencia = obtenerDiferenciaYear(datos.year)
    resul -= ((diferencia * 3) * resul) / 100

    resul *= calcularMarca(datos.marca)

    resul *= calcularPlan(datos.plan)

    resul = resul.toFixed(2)

    resul = formatearDinero(resul)

    setCargando(true)
    setTimeout(() => {
      setResultado(resul)
      setCargando(false)
    }, 3000);
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        valorizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}
export default CotizadorContext