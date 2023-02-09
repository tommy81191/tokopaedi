import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

const SiteMain = ({ children }: Props) => {
	return (
		<main className="pt-12 pb-20 w-full max-w-[1280px] mx-auto">
			{children}
		</main>
	)
}
