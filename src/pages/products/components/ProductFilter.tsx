import { useEffect, useState } from 'react'
import { ReactComponent as IconFilter } from '../../../assets/svg/icon-filter.svg'

const ProductFilter = () => {
	const [categories, setCategories] = useState<String[]>()

	const getCategories = async () => {
		try {
			const response = await fetch(`https://dummyjson.com/products/categories`)
			const data = await response.json()

			setCategories(data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		getCategories()
	}, [])

	const handleOnclick = () => {

	}

	return (
		<div className="w-[280px] py-8 px-6 rounded-md shadow-md border border-gray-300 relative">
			<span className="absolute left-0 top-6 h-10 border-l-4 border-green-600"></span>
			<p className="font-bold text-gray-500 uppercase flex"><IconFilter className="w-5 h-5 mt-[2px] mr-2" /> Filter</p>
			<ul>
				{categories?.map((category, idx) => (
					<li key={idx} className="mb-3 last:mb-0">
						<button className="capitalize text-gray-400 hover:text-gray-600" onClick={handleOnclick}>
							{category.replace(`-`, ` `)}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ProductFilter
