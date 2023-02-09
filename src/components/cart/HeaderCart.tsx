import { useState } from 'react'
import { ReactComponent as IconCart } from '../../assets/svg/icon-cart.svg'
import { ReactComponent as IconClose } from '../../assets/svg/icon-close.svg'
import { removeCart } from '../../redux/slices/cartSlice'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { formatCurrency } from '../../services/utils/formatCurrency'
import Button from '../common/Button'
import InputCartQty from './InputCartQty'

interface cartItemsType {
	id: number
	title: string
	thumbnail: string
	price: number
	qty: number
}

const HeaderCart = () => {
	const [toggleCart, setToggleCart] = useState(false)

	const cartItems = useAppSelector(state => state.cart.cartItems)
	const cartQty = useAppSelector(state => state.cart.totalQty)
	const dispatch = useAppDispatch()

	return (
		<>
			<button className="relative w-6" onClick={() => setToggleCart(true)}>
				<IconCart className="w-6 h-6" />
				<span className="inline-block absolute top-2/4 left-2/4 bg-red-500 text-white rounded-full text-xs px-[3.5px]">{cartQty}</span>
			</button>
			<div className={`fixed top-0 bottom-0 right-0 w-full max-w-[300px] bg-white z-50 shadow-lg overflow-y-auto flex flex-col justify-between transition-all duration-300 ${toggleCart ? `translate-x-0` : `translate-x-[300px]`}`}>
				<button className="absolute flex items-center justify-center w-[28px] h-[28px] text-white bg-green-600 right-0 hover:bg-red-400 transition-all duration-200" title="Close" onClick={() => setToggleCart(false)}>
					<IconClose className="w-5 h-5" />
				</button>
				<div className="p-6">
					<h2 className="border-b border-gray-200 pb-3">Cart</h2>
					{cartItems && (
						<ul>
							{cartItems?.map((item: cartItemsType, idx: number) => {
								let price = item.price || 0

								return (
									<li key={idx} className="flex mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
										<div className="w-[64px] h-[64px] relative">
											<button className="w-5 h-5 flex items-center justify-center absolute top-[-6px] left-[-6px] bg-red-500 text-white rounded-full" title="Remove" onClick={() => dispatch(removeCart(item.id))}>
												<IconClose className="w-4 h-4" />
											</button>
											<img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
										</div>
										<div className="w-[calc(100%-64px)] pl-4">
											<p className="mb-1">{item.title}</p>
											<p className="font-bold mb-5">{formatCurrency( price )}</p>
											<div className="text-gray-400 text-sm">
												<InputCartQty value={item.qty} />
											</div>
										</div>
									</li>
								)
							})}
						</ul>
					)}
				</div>
				<div className="sticky bottom-0 border-t border-gray-200 p-6 bg-white">
					<Button width="full">Checkout</Button>
				</div>
			</div>
		</>
	)
}

export default HeaderCart
