import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/common/Button'
import PageWrapper from '../layouts/PageWrapper'
import SiteContainer from '../layouts/SiteContainer'
import { formatCurrency } from '../../services/utils/formatCurrency'
import { useAppDispatch } from '../../redux/store'
import { addCart } from '../../redux/slices/cartSlice'

interface DetailTypes {
	id: number
	title: string
	images: string[]
	description: string
	price: number
	stock: number
	category: string
}

const ProductDetail = () => {
	const [detail, setDetail] = useState<DetailTypes>()
	const [quantity, setQuantity] = useState(1)
	const { productId } = useParams()
	const dispatch = useAppDispatch()

	const getDetail = async () => {
		const response = await fetch(`https://dummyjson.com/products/` + productId)
		const data = await response.json()

		setDetail(data)
	}

	const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number(event.target.value)

		setQuantity(value)
	}

	const addToCart = () => {
		const images = detail?.images
		const thumbnail = images?.find((image) => image.search(`thumbnail.jpg`) > -1)

		dispatch(addCart({
			id: Number(detail?.id),
			title: detail?.title || ``,
			thumbnail: thumbnail || ``,
			price: detail?.price || 0,
			qty: quantity
		}))
	}

	useEffect(() => {
		getDetail()
	}, [])

	return (
		<SiteContainer>
			<PageWrapper>
				<div className="flex">
					<div className="border border-gray-300 rounded-md overflow-hidden w-[35%]">
						<img src={detail?.images?.[0]} alt="" />
					</div>
					<div className="w-[65%] pl-10">
						<p className="mb-2 text-gray-400 uppercase tracking-wide text-sm">{detail?.category}</p>
						<h1>{detail?.title}</h1>
						<div className="mb-6">{detail?.description}</div>
						<h2>{detail?.price ? formatCurrency(detail?.price) : ``}</h2>
						<div className="flex">
							<input
								type="number"
								name=""
								className="border border-gray-300 py-3 px-4 mr-3 w-28"
								min={1}
								max={detail?.stock}
								value={quantity}
								onChange={event => handleQuantity(event)}
							/>
							<Button onClick={addToCart}>Add to Cart</Button>
						</div>
					</div>
				</div>
			</PageWrapper>
		</SiteContainer>
	)
}

export default ProductDetail
