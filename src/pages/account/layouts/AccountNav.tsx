import { Link, useNavigate } from 'react-router-dom'
import useAccount from '../../../services/hooks/useAccount'

const AccountNav = () => {
	const { logoutUser, getCurrentUser } = useAccount()
	const navigate = useNavigate()
	const dataUser = getCurrentUser()

	const handleLogout = (event: any) => {
		event.preventDefault()

		logoutUser()
		navigate(`/account`)
	}

	return (
		<div className="w-[280px] shadow-md rounded-md overflow-hidden">
			<div className="flex p-6 bg-green-600 text-white">
				<img src="https://via.placeholder.com/80" alt="" className="w-[48px] h-[48px] rounded-full" />
				<div className="w-[calc(100%-48px)] pl-4">
					<p className="mb-1 font-bold">{dataUser.name}</p>
					<p className="text-sm">{dataUser.email}</p>
				</div>
			</div>
			<nav className="p-6 bg-white">
				<ul>
					<li className="mb-4"><Link to="/order">My Order</Link></li>
					<li><button onClick={event => handleLogout(event)}>Logout</button></li>
				</ul>
			</nav>
		</div>
	)
}

export default AccountNav
