import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"

export const Root = () => {
	return (
		<>
			<Header />
			<div id="detail">
				<Outlet />
			</div>
		</>
	)
}