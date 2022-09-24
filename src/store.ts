import { Subject } from "rxjs";

export const subject = new Subject();

export interface ITodo {
	id: string;
	description: string;
	completed: boolean;
}

export interface IState {
	input: string;
	data: ITodo[];
	validate: boolean;
}

const initialTodo: IState = {
	input: "",
	data: [],
	validate: false,
};

let state = initialTodo;

export const todoStore = {
	init: () => {
		subject.next(initialTodo);
	},
	addTodo: () => {
		if (!state.input) {
			state.validate = true;
			subject.next(state);
		} else {
			state.data = [
				...state.data,
				{
					id: new Date().toISOString(),
					description: state.input,
					completed: false,
				} as ITodo,
			];

			todoStore.resetInput();
			subject.next(state);
		}
	},
	removeTodo: (id: string) => {
		state.data = state.data.filter((todo: ITodo) => todo.id !== id);
		subject.next(state);
	},
	completeTodo: (id: string) => {
		state.data = state.data.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		});
		subject.next(state);
	},
	changInput: (value: string) => {
        state.validate = false
		state.input = value;
		subject.next(state);
	},
	resetInput: () => {
		state.input = "";
		subject.next(state);
	},
	state,
};
