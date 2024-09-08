import React from "react";
import { Button } from "../ui/button";

const Home = () => {
	const [clicked, setClicked] = React.useState(false);

	return (
		<div className="flex flex-col space-y-4">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			{clicked && <p>You clicked me!</p>}
			<div>
				<Button onClick={() => setClicked(!clicked)}>Click me!</Button>
			</div>
		</div>
	);
};

export default Home;
