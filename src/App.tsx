import React from 'react';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom"
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import Other from "./components/Other";

const App = () => {

    return (
        <BrowserRouter>
            <div style={{justifyContent: "space-around", paddingTop: 20}}>
                <NavLink to={"/users"} style={{padding: 15}}>Пользователи</NavLink>
                <NavLink to={"/todos"} style={{padding: 15}}>Дела</NavLink>
                <NavLink to={"/other"} style={{padding: 15}}>Остальное</NavLink>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
                <Route path="/other" element={<Other/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;