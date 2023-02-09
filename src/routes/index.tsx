import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from '../context/CartContext'
import AboutUs from '../pages/about-us'
import Account from '../pages/account'
import Order from '../pages/account/order'
import Home from '../pages/home'
import Products from '../pages/products'
import ProductDetail from '../pages/products/ProductDetail'
import ProtectedRoutes from './ProtectedRoutes'

const RoutesManager = () => {
	return (
		<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path='/about-us' element={<AboutUs />} />

        {/** Account Pages */}
        <Route path='/account' element={<Account />} />
        <Route path='/account/login' element={<Account />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/account/order' element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
	)
}

export default RoutesManager
