import { Outlet, Navigate } from 'react-router-dom'
import useAccount from '../services/hooks/useAccount'

const ProtectedRoutes = () => {
	const { getCurrentUser } = useAccount()

	const logged = getCurrentUser()

	return (
		logged ? <Outlet/> : <Navigate to="/account/login" />
	)
}

export default ProtectedRoutes
