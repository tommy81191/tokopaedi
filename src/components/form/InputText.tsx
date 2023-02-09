import { FormEventHandler } from 'react'
import InputClass from './InputClass'

interface Props {
	label?: string
	name?: string
	placeholder?: string
	value?: string
	required?: boolean
	error?: string
	onChange?: FormEventHandler<HTMLInputElement>
}

const InputText = (
	{
		label,
		name,
		placeholder,
		value,
		required,
		error,
		onChange
	}: Props
) => {
	return (
		<>
			{
				label ? (
					<label className="inline-block pb-2">
						{required ? <>{label} <span className="text-red-500">*</span></> : label}
					</label>
				)
				: (
					<></>
				)
			}
			<input
				type="text"
				name={name}
				placeholder={placeholder + (required && !label ? ` *` : ``)}
				value={value}
				required={required}
				className={InputClass()}
				onChange={onChange}
			/>
			{error ? <p className="text-red-500 text-sm mt-1 mb-0">{error}</p> : <></>}
		</>
	)
}

export default InputText
