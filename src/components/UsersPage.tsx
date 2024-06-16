import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetchUsers().then()
    }, []);
    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <UserItem key={user.id} user={user}/>}
        />
    );
};

export default UsersPage;