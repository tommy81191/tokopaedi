import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as IconArrowRight } from '../../../assets/svg/icon-arrow-right.svg'
import ProductCard from '../../../components/product/ProductCard'

interface productProps {
	id: number
	thumbnail: string
	title: string
	price: number
}

const HomeProducts = () => {
	const [products, setProducts] = useState<productProps[]>([])

	const getProduct = async () => {
		try {
			const response = await fetch(`https://dummyjson.com/products?limit=8`)
			const data = await response.json()
			setProducts(data?.products)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getProduct()
	}, [])

	return (
		<div className="pt-10 pb-10">
			<div className="flex justify-between items-end border-b border-gray-200 pb-2 mb-8">
				<h2 className="mb-0">Products</h2>
				<Link to="/products" className="flex items-center text-green-700">All Products <IconArrowRight className="w-6 h-6 ml-2"/></Link>
			</div>
			<div>
				<div className="flex flex-wrap m-[-12px]">
					{products?.map((product, idx) => (
						<div key={idx} className="p-[12px] w-1/2 md:w-1/4">
							<ProductCard id={product?.id} thumbnail={product?.thumbnail} title={product?.title} price={product?.price} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomeProducts
