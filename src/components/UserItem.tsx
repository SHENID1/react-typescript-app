import React, {FC, ReactNode} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    children?: ReactNode;
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: "1px solid gray"}}>{user.name}
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;