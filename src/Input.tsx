import React, { useEffect, useState } from 'react';

import Add from './Add';
import { subject, todoStore } from './store';

type Props = {};

const Input = (props: Props) => {
	const [todos, setTodos] = useState(todoStore.state);

	useEffect(() => {
		subject.subscribe((item: any) => {
			setTodos({ ...item });
		});
	}, []);

	return (
		<div>
			<div className="flex">
				<input
					value={todos.input}
					type="text"
					className="hidden sm:flex items-center w-96 text-left space-x-3 px-4 h-10 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-tl-lg rounded-bl-lg text-slate-400"
					onChange={(e) => todoStore.changInput(e.target.value)}
				/>
				<Add />
			</div>
			{todos.validate && <p className="text-red-600">Không được bỏ trống!</p>}
		</div>
	);
};

export default Input;
