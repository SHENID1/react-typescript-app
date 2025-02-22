import React, {FC, ReactNode} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    children?: ReactNode;
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map(user =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;