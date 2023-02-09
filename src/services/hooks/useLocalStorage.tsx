const useLocalStorage = () => {

	const setStorage = (key: string, data: any) => {
		const dataJSON = JSON.stringify(data)

		localStorage.setItem(key, dataJSON)
	}

	const getStorage = (key: string) => {
		const getData = localStorage.getItem(key)

		if (getData) {
			const dataParsed = JSON.parse(getData)

			return dataParsed
		}
	}

	const removeStorage = (key: string) => {
		localStorage.removeItem(key)
	}

	return { setStorage, getStorage, removeStorage }
}

export default useLocalStorage
