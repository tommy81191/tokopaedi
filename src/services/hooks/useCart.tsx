import useLocalStorage from './useLocalStorage'

interface CartType {
	id: number
	title: string
	thumbnail: string
	price: number
	qty: number
}

const useCart = () => {
	const CART_STORAGE_KEY = `tp-cart-list`
	const { setStorage, getStorage } = useLocalStorage()

	const getCart = () => {
		const cartData = getStorage(CART_STORAGE_KEY)

		return cartData
	}

	const addCart = (data: CartType) => {
		const cartData = getCart()

		if(cartData) {
			const findItemIndex = cartData.findIndex((cart: CartType) => cart.id === data.id)
			const findItem = cartData[findItemIndex]

			if(findItem) {
				// update item quantity
				findItem.qty = findItem.qty + data.qty

				setStorage(CART_STORAGE_KEY, cartData)
			}
			else {
				let mergeCartData = [
					...cartData,
					data
				]

				setStorage(CART_STORAGE_KEY, mergeCartData)
			}
		}
		else {
			let mergeCartData = [
				data
			]

			setStorage(CART_STORAGE_KEY, mergeCartData)
		}

		return cartData
	}

	const removeCart = (id: number) => {
		const cartData = getCart()

		if(cartData) {
			const findItemIndex = cartData.findIndex((cart: CartType) => cart.id === id)
			cartData.splice(findItemIndex, 1)

			setStorage(CART_STORAGE_KEY, cartData)
		}
	}

	const cartQty = () => {
		const cartData = getCart()
		let total: number = 0

		if( cartData ) {
			cartData.forEach((cart: CartType) => {
				total += cart.qty
			})
		}

		return total
	}

	return { getCart, addCart, removeCart, cartQty }
}

export default useCart
