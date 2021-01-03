import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";

export type UserType = {
    id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        let user = {id: v1(), name};
        let newUser = [user, ...users];
        setUsers(newUser);
        console.log(newUser)
    }

    return (
        <div>
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    );
}

export default HW3;
