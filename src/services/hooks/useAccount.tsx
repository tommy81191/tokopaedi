import useLocalStorage from './useLocalStorage'

interface LoginParams {
	name: string,
	email: string
}

const useAccount = () => {
	const ACCOUNT_STORAGE_KEY = `current_user`
	const { setStorage, getStorage, removeStorage } = useLocalStorage()

	const setLoginUser = (data: LoginParams) => {
		setStorage(ACCOUNT_STORAGE_KEY, data)
	}

	const getCurrentUser = () => {
		return getStorage(ACCOUNT_STORAGE_KEY)
	}

	const logoutUser = () => {
		return removeStorage(ACCOUNT_STORAGE_KEY)
	}

	return { setLoginUser, getCurrentUser, logoutUser }
}

export default useAccount
