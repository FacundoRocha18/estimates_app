import { Outlet } from "react-router-dom"
import { Header } from "../components/header/header"

export const Root = () => {
	return (
		<main className='bg-[#E7E7E7] min-h-screen'>
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</main>
	)
}