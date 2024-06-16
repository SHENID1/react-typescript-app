import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}
const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{backgroundColor: todo.completed? "green": "red", padding: "10px"}}>
            <input type={"checkbox"} checked={todo.completed}/>
            {todo.id}: {todo.title} - {todo.userId}
        </div>
    );
};

export default TodoItem;