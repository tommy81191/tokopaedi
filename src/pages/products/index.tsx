import { useState, useEffect } from 'react'
import Pagination from '../../components/common/Pagination'
import ProductCard from '../../components/product/ProductCard'
import PageWrapper from '../layouts/PageWrapper'
import SiteContainer from '../layouts/SiteContainer'
import ProductFilter from './components/ProductFilter'

interface productProps {
	id: number
	thumbnail: string
	title: string
	price: number
}

const Products = () => {
	const [products, setProducts] = useState<productProps[]>([])

	const getProduct = async () => {
		try {
			const response = await fetch(`https://dummyjson.com/products?limit=12`)
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
		<SiteContainer>
			<PageWrapper>
				<div className="mb-10 pb-6 border-b border-gray-300">
					<h1>Products</h1>
				</div>
				<div className="flex items-start">
					<ProductFilter />
					<div className="w-[calc(100%-280px)] pl-10">
						<div className="flex flex-wrap m-[-12px]">
							{products?.map((product, idx) => (
								<div key={idx} className="p-[12px] w-1/2 md:w-1/3">
									<ProductCard id={product?.id} thumbnail={product?.thumbnail} title={product?.title} price={product?.price} />
								</div>
							))}
						</div>
						<Pagination />
					</div>
				</div>
			</PageWrapper>
		</SiteContainer>
	)
}

export default Products
