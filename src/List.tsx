import React, { useEffect, useState } from "react";
import { ITodo, subject, todoStore } from "./store";
interface IListProps {
	children?: React.ReactNode;
}

const List: React.FC<IListProps> = ({ children }) => {
	const [todos, setTodos] = useState<ITodo[]>(todoStore.state.data);

	useEffect(() => {
		subject.subscribe((value: any) => setTodos(value.data));
	}, []);

	return (
		<div className="mt-4">
			{todos.map((todo) => (
				<li className="bg-blue-50 rounded-lg p-3 font-medium text-gray-700 flex justify-between mb-3" key={todo.id}>
					<div className="flex align-center">
						<input type="checkbox" checked={todo.completed} onChange={() => todoStore.completeTodo(todo.id)} />
						<span className={`ml-2 ${todo.completed ? "line-through text-gray-400" : ""}`}>{todo.description}</span>
					</div>
					<div>
					
						<button
			
						onClick={() => todoStore.removeTodo(todo.id)}
						>
							Delete
						</button>
					</div>
				</li>
			))}
		</div>
	);
};

export default List;
