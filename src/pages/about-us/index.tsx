import SiteContainer from '../layouts/SiteContainer'
import PageWrapper from '../layouts/PageWrapper'

const AboutUs = () => {
	return (
		<SiteContainer>
			<PageWrapper>
				<div className="max-w-4xl mx-auto">
					<div className="mb-10 pb-5 border-b border-gray-300">
						<h1>About Us</h1>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel lorem porttitor, hendrerit sapien in, porttitor mauris. In hac habitasse platea dictumst. Vestibulum at velit a tortor sodales fermentum in eget mauris. Quisque elementum erat turpis, vitae auctor erat gravida ut.</p>
						<p>Aliquam erat volutpat. Aenean pulvinar purus in metus tincidunt tincidunt at non eros. Proin eu feugiat odio. Cras laoreet arcu massa, eget pellentesque neque viverra vel. Cras a lectus varius, condimentum mi in, aliquam erat. Suspendisse molestie massa sit amet erat euismod interdum. Etiam tincidunt, risus gravida porta tincidunt, ex metus vestibulum urna, a mollis lorem enim et purus. Suspendisse scelerisque mauris id tortor rutrum mattis.</p>
					</div>
				</div>
			</PageWrapper>
		</SiteContainer>
	)
}

export default AboutUs
