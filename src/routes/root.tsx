import { Outlet } from "react-router-dom"
import { Header } from "../components/header/header"

export const Root = () => {
	return (
		<div className='bg-[#E7E7E7]'>
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</div>
	)
}