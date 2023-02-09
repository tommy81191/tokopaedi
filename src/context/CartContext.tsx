import { createContext, ReactNode, useState } from 'react'
import useCart from '../services/hooks/useCart'

interface CartItemsType {
	id: number
	title: string
	thumbnail: string
	price: number
	qty: number
}

interface ContextType {
	cartItems: CartItemsType[]
	setCartItems: React.Dispatch<React.SetStateAction<CartItemsType[]>>
}

interface ProviderProps {
	children?: ReactNode
}

export const CartContext = createContext<ContextType>({
	cartItems: [],
	setCartItems: () => {}
})

export const CartContextProvider = ({ children }: ProviderProps) => {
	const cartData = useCart()
	const [cartItems, setCartItems] = useState<CartItemsType[]>(cartData.getCart())

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	)
}
