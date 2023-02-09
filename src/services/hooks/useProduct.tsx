import { useState } from 'react'

interface ProductDetailTypes {
	id: number
	title: string
	images: string[]
	description: string
	price: number
	stock: number
	category: string
}

const useProduct = () => {
	const [productDetail, setProductDetail] = useState<ProductDetailTypes>()

	const getProductById = async (productId: number) => {
		const response = await fetch(`https://dummyjson.com/products/` + productId)
		const data = await response.json()

		setProductDetail(data)
	}

	return { getProductById }
}

export default useProduct
