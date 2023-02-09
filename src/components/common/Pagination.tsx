import { ReactComponent as IconChevronLeft } from '../../assets/svg/icon-chevron-left.svg'

interface Props {
	limit: number
}

const Pagination = () => {
	return (
		<div className="flex justify-center pt-12">
			<ul className="flex items-center">
				<li className="mr-4">
					<button className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600">
						<IconChevronLeft className="w-5 h-5 text-white ml-[-2px]" />
					</button>
				</li>
				<li className="mx-2">
					<button className="text-gray-600 font-bold">
						1 <span className="block w-6 pt-1 border-b-2 border-green-600"></span>
					</button>
				</li>
				<li className="mx-2">
					<button className="text-gray-500">
						2 <span className="block w-6 pt-1 border-b-2 border-transparent"></span>
					</button>
				</li>
				<li className="mx-2">
					<button className="text-gray-500">
						3 <span className="block w-6 pt-1 border-b-2 border-transparent"></span>
					</button>
				</li>
				<li className="ml-4">
					<button className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600">
						<IconChevronLeft className="w-5 h-5 text-white mr-[-2px] rotate-180" />
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Pagination
