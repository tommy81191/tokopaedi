interface Props {
	title: string
	subtitle?: string
}

const AccountHeading = ({ title, subtitle }: Props) => {
	return (
		<div className="mb-8 pb-5 border-b border-gray-300">
			<h1 className="mb-0">{title}</h1>
			{subtitle && (<p className="text-gray-400 mt-4">{subtitle}</p>)}
		</div>
	)
}

export default AccountHeading
