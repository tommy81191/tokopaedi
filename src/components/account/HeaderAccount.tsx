import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAccount from '../../services/hooks/useAccount'
import { ReactComponent as IconElipsisV } from '../../assets/svg/icon-elipsis-v.svg'

const HeaderAccount = () => {
	const { logoutUser } = useAccount()
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<div
			className="relative"
			onMouseEnter={() => setShowDropdown(true)}
			onMouseLeave={() => setShowDropdown(false)}
		>
			<div className="flex items-center cursor-pointer">
				<img src="https://via.placeholder.com/80" alt="" className="w-[32px] h-[32px] rounded-full" />
				<IconElipsisV className="w-5 h-5 ml-1 text-gray-400" />
			</div>
			<div className={`p-6 rounded-md shadow-md absolute right-0 bg-white w-44 transition-all duration-500 ease-out ${showDropdown ? `opacity-100 visible` : `opacity-0 hidden`}`}>
				<ul>
					<li className="mb-2"><Link to="/account">My Account</Link></li>
					<li><Link to="/account" onClick={logoutUser}>Logout</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderAccount
