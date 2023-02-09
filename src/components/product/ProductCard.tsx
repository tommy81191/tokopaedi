import { Link } from 'react-router-dom'
import { formatCurrency } from '../../services/utils/formatCurrency'

interface Props {
	id: number
	title: string
	thumbnail: string
	price: number
}

const ProductCard = (
	{
		id,
		title,
		thumbnail,
		price
	}: Props
) => {
	return (
		<Link to={`/products/` + id} className="flex flex-col min-h-full shadow-md rounded-lg overflow-hidden border border-gray-300">
			<div>
			<img src={thumbnail} alt="" />
			</div>
			<div className="p-4">
				<p className="text-sm mb-0">{title}</p>
				<h4>{formatCurrency(price)}</h4>
			</div>
		</Link>
	)
}

export default ProductCard
