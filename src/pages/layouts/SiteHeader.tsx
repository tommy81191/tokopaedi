import { Link } from 'react-router-dom'
import PageWrapper from './PageWrapper'
import { ReactComponent as IconSearch } from '../../assets/svg/icon-search.svg'
import Button from '../../components/common/Button'
import useAccount from '../../services/hooks/useAccount'
import HeaderAccount from '../../components/account/HeaderAccount'
import HeaderCart from '../../components/cart/HeaderCart'

const SiteHeader = () => {
	const { getCurrentUser } = useAccount()
	const logged = getCurrentUser()

	const navItems = [
		{
			label: `Products`,
			url: `/products`,
		},
		{
			label: `About Us`,
			url: `/about-us`,
		},
		{
			label: `Contact Us`,
			url: `#`,
		},
		{
			label: `FAQs`,
			url: `#`,
		},
	]

	return (
		<div className="shadow bg-white">
			<div className="py-2 bg-gray-100">
				<PageWrapper>
					<div className="flex justify-end">
						<nav>
							<ul className="flex">
								{navItems?.map((navItem, idx) => (
									<li className="ml-6" key={idx}>
										<Link to={navItem.url} className='text-sm text-gray-500'>{navItem.label}</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</PageWrapper>
			</div>
			<div className="py-6">
				<PageWrapper>
					<div className="flex items-center justify-between">
						<Link to="/"><h1 className="text-green-600">tokopaedi</h1></Link>
						<div className="flex items-center pl-8 w-[70%]">
							<form className="w-full flex border rounded-lg overflow-hidden">
								<input type="text" className="py-2 px-3 w-full" placeholder="Search" />
								<button className="flex items-center p-2 bg-gray-100">
									<IconSearch className="w-6 h-6 text-gray-500" />
								</button>
							</form>
						</div>
						<div className="pl-8 flex items-center">
							<div className="flex items-center">
								<HeaderCart />
							</div>
							<div className="pl-6 ml-6 relative">
								<span className="block w-px h-4/5 absolute top-2/4 left-0 translate-y-[-50%] border-l border-gray-200"></span>
								{!logged && (<Button type="link" url="/account/login">Login</Button>)}
								{logged ? (<HeaderAccount />) : (<></>)}
							</div>
						</div>
					</div>
				</PageWrapper>
			</div>
		</div>
	)
}

export default SiteHeader
