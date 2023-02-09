import { createSlice } from '@reduxjs/toolkit'
import useCart from '../../services/hooks/useCart'

// interface CartItemsType {
// 	id: number
// 	title: string
// 	thumbnail: string
// 	price: number
// 	qty: number
// }

const CartSlice = () => {
	const cart = useCart() // custom hook

	const createCartSlice = createSlice({
		name: `cart`,
		initialState: {
			cartItems: cart.getCart(),
			totalQty: cart.cartQty()
		},
		reducers: {
			addCart: (state, action) => {
				cart.addCart(action.payload)
				state.cartItems = cart.getCart()
				state.totalQty = cart.cartQty()
			},
			removeCart: (state, action) => {
				cart.removeCart(action.payload)
				state.cartItems = cart.getCart()
				state.totalQty = cart.cartQty()
			},
			updateCart: (state) => {
				state.cartItems = cart.getCart()
				state.totalQty = cart.cartQty()
			}
		}
	})

	return createCartSlice
}

const cartSlice = CartSlice()

export const { addCart, removeCart } = cartSlice.actions

export default cartSlice.reducer
