import { ChangeEvent, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/store'

interface Props {
	min?: number
	max?: number
	value: number
}

const InputCartQty = ({
	min = 1,
	max,
	value,
}: Props) => {
	const [qtyValue, setQtyValue] = useState(value)

	const increment = () => {
		setQtyValue(qtyValue + 1)
	}

	const decrement = () => {
		if(qtyValue > 1) {
			setQtyValue(qtyValue - 1)
		}
	}

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value)

		setQtyValue(newValue)
	}

	useEffect(() => {
		setQtyValue(value)
	}, [value])

	return (
		<div className="flex items-center">
			<button type="button" onClick={decrement} className="text-2xl p-1 mr-1">-</button>
			<input type="number" value={qtyValue} min={min} max={max} className="border border-gray-300 w-[64px] p-2" onChange={event => handleOnChange(event)} />
			<button type="button" onClick={increment} className="text-2xl p-1 ml-1">+</button>
		</div>
	)
}

export default InputCartQty
