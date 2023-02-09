import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	type?: `button` | `link`
	url?: string
	variant?: `solid` | `outline`
	width?: `auto` | `full`
	children?: ReactNode
	onClick?: () => void
}

const Button = (
	{
		type,
		url,
		variant,
		width,
		children,
		onClick
	}: Props
) => {
	const styleClass = `
		text-center
		border
		border-green-600
		inline-block
		py-2
		px-4
		rounded-lg
		bg-green-600`
		+ (width === `full` ? ` w-full` : ``)
		+ (variant === `outline` ? ` bg-transparent text-green-600` : ` text-white`)

	if(type === `link`) {
		return (
			<Link className={styleClass} to={`` + url} onClick={onClick}>{children}</Link>
		)
	}

	return (
		<button className={styleClass} onClick={onClick}>{children}</button>
	)
}

export default Button
