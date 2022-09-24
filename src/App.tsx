import React from "react";

import Input from "./Input";
import List from "./List";

const App: React.FC = () => {
	return (
		<div className="w-screen h-screen p-6 flex justify-center">
			<div className="text-center flex flex-col">
				<h1 className="text-3xl font-medium text-green-600 mb-3">Todo List</h1>

				<Input />

				<List />
			</div>
		</div>
	);
};

export default App;

