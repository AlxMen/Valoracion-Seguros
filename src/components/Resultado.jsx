import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES} from '../constants'

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const {marca, year, plan} = datos
  return (
    <div className="bg-sky-100 text-center mt-5 p-5 shadow">
      <h2 className="text-slate-800 font-black text-3xl">
        Resumen
      </h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {marca}
      </p>
    </div>
  );
};

export default Resultado;
