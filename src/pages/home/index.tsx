import SiteContainer from '../layouts/SiteContainer'
import PageWrapper from '../layouts/PageWrapper'
import HomeProducts from './components/HomeProducts'
import HomeSlider from './components/HomeSlider'

const Home = () => {
	return (
		<SiteContainer>
			<PageWrapper>
				<HomeSlider />
				<HomeProducts />
			</PageWrapper>
		</SiteContainer>
	)
}

export default Home
