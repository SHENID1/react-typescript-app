import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        fetchTodos().then()
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=11");
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}/>
    );
};

export default TodosPage;