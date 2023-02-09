import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

const PageWrapper = ({ children }: Props) => {
	return (
		<div className="w-full max-w-[1440px] px-4 lg:px-16 md:px-8 sm:px-6">
			{children}
		</div>
	)
}

export default PageWrapper
