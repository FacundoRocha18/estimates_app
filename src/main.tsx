import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'
import { Providers } from './app/providers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<main className='dark text-foreground bg-background'>
				<App />
			</main>
		</Providers>
	</React.StrictMode>,
)
