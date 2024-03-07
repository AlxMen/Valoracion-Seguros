import { CotizadorProvider } from "./context/CotizadorProvaider"

import AppSeguro from "./components/AppSeguro"

function App() {
  
  return (
    <CotizadorProvider>
      <AppSeguro />

    </CotizadorProvider>
  )
}

export default App
