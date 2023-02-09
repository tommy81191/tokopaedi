import { ReactElement, ReactNode } from 'react'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

interface Props {
	children?: ReactElement
}

const SiteContainer = ({ children }: Props) => {
	return (
		<div className="min-h-screen grid grid-flow-row grid-rows-[auto_1fr_auto]">
			<SiteHeader />
			<main className="pt-12 pb-20 w-full max-w-[1280px] mx-auto">
				{children}
			</main>
			<SiteFooter />
		</div>
	)
}

export default SiteContainer
