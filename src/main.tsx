import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Providers } from './providers/providers.tsx'
import { Root } from './routes/root.tsx'
import { Auth } from './routes/auth.tsx'
import { ErrorPage } from './routes/error-page.tsx'
import { App } from './components/app/App.tsx'
import { SignupForm } from './components/auth/signup-form.tsx'
import { SigninForm } from './components/auth/signin-form.tsx'
import './styles/index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <App />
			},
			{
				path: 'auth/signin',
				element: <Auth><SigninForm /></Auth>
			},
			{
				path: 'auth/signup',
				element: <Auth><SignupForm /></Auth>
			}
		]
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	</React.StrictMode>
)
