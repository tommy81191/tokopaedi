import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/common/Button'
import FormRow from '../../../components/form/FormRow'
import InputPassword from '../../../components/form/InputPassword'
import InputText from '../../../components/form/InputText'
import PageWrapper from '../../layouts/PageWrapper'
import SiteContainer from '../../layouts/SiteContainer'
import useAccount from '../../../services/hooks/useAccount'

const Login = () => {
	const navigate = useNavigate()
	const { setLoginUser } = useAccount()

	const [loading, setLoading] = useState(false)
	const [formError, setFormError] = useState({
		email: ``,
		password: ``
	})

	// Get user by email
	const getUser = async ( email: string ) => {
		try {
			const response = await fetch(`http://localhost:3000/api/user.json`)
			const data = await response.json()

			return data.user_data.find((dataItem:any) => dataItem.email === email)
		}
		catch (err) {
			console.error(err)
		}
	}

	// Handle submit
	const loginSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = new FormData(event.currentTarget)
		const email = String(form.get(`email`))
		const password = String(form.get(`password`))

		let errorList = {
			email: ``,
			password: ``
		}

		if (!email) {
			errorList = {
				...errorList,
				email: `Email is required`
			}
		}

		if (!password) {
			errorList = {
				...errorList,
				password: `Password is required`
			}
		}
		setFormError(errorList)

		if(email) {
			setLoading(true)

			getUser(email).then(userData => {

				setLoading(false)

				if (!userData) {
					errorList = {
						...errorList,
						email: `Email not registered`
					}
				}

				if (password && userData && (userData.password !== password)) {
					errorList = {
						...errorList,
						password: `Password not match`
					}
				} else if (userData && userData.password === password) {
					const storeUserData = {
						name: userData?.name,
						email: userData?.email,
					}

					setLoginUser(storeUserData)

					navigate(`/account/order`)
				}

				setFormError(errorList)
			})
		}
	}

	return (
		<SiteContainer>
			<div className="flex flex-col justify-center h-full min-h-full">
				<PageWrapper>
					<div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
						<h1 className="text-center text-green-600">Login</h1>
						<form onSubmit={event => loginSubmit(event)} className={`${loading ? `opacity-60` : ``}`}>
							<FormRow>
								<InputText
									label="Email"
									name="email"
									placeholder="Your Email"
									//required={true}
									error={formError.email}
								/>
							</FormRow>
							<FormRow>
								<InputPassword
									label="Password"
									name="password"
									placeholder="Your Password"
									//required={true}
									error={formError.password}
								/>
								<div className="text-right pt-2">
									<Link to="#" className="text-md text-gray-400 hover:underline">Forget Password?</Link>
								</div>
							</FormRow>
							<div className="mb-4">
								<Button width="full">Login</Button>
							</div>
							<div>
								<Button width="full" variant="outline" type="link" url="#">Register</Button>
							</div>
						</form>
					</div>
				</PageWrapper>
			</div>
		</SiteContainer>
	)
}

export default Login
