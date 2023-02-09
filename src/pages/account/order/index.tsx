import SiteContainer from '../../layouts/SiteContainer'
import AccountContainer from '../layouts/AccountContainer'
import AccountHeading from '../layouts/AccountHeading'

const Order = () => {
	return (
		<SiteContainer>
			<AccountContainer>
				<AccountHeading title="My Order" />
				<div>
					<p>No order yet.</p>
				</div>
			</AccountContainer>
		</SiteContainer>
	)
}

export default Order
