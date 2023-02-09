import { CartContextProvider } from './context/CartContext'
import RoutesManager from './routes'

function App() {
  return (
    <CartContextProvider>
      <RoutesManager />
    </CartContextProvider>
  )
}

export default App
