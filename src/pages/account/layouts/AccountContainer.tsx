import AccountNav from './AccountNav'
import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

const AccountContainer = ({ children }: Props) => {
	return (
		<div className="flex flex-wrap">
			<AccountNav />
			<div className="w-[calc(100%-280px)] pl-12">
				{children}
			</div>
		</div>
	)
}

export default AccountContainer
