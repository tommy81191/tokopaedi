import { Navigate } from 'react-router-dom'
import useAccount from '../../services/hooks/useAccount'
import Login from './login'

const Account = () => {
	const { getCurrentUser } = useAccount()

	const logged = getCurrentUser()

	return (logged ? <Navigate to="/account/order" /> : <Login />)
}

export default Account
