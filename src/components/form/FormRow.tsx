import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

const FormdRow = ({ children }: Props) => {
	return (
		<div className="mb-6">
			{children}
		</div>
	)
}

export default FormdRow
