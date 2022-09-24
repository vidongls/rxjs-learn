import React from "react";
import { todoStore } from "./store";

interface IAddProps {}

const Add: React.FC<IAddProps> = () => {

	return (
		<button
			className="h-10 px-6 font-semibold bg-blue-500 text-white rounded-tr-lg rounded-br-lg hover:bg-blue-400"
			onClick={todoStore.addTodo}
		>
			Add
		</button>
	);
};

export default Add;
