import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Providers } from './components/app/providers.tsx'
import { Root } from './routes/root.tsx'
import { Signin } from './routes/Signin.tsx'
import './styles/index.css'
import ErrorPage from './routes/error-page.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: '/auth/signin',
		element: <Signin />
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	</React.StrictMode>
)
