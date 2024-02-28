import React from "react";

import { Header, Home } from "./components";
import { Destination, Crew, Technology } from './pages'
import { Route, Routes } from "react-router-dom";


function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/destination" element={<Destination />} />
				<Route path="/crew" element={<Crew />} />
				<Route path="/technology" element={<Technology />} />

			</Routes>

		</>


	);
}

export default App;
