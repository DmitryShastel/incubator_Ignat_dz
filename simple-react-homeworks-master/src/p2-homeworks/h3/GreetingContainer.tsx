import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


export type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const decimalsStartCheck = (name: string) => {
        const regexp = /(^\d+)|(^\s)/g;
        const match = regexp.test(name);
        return match
    }
    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value: newName} = e.currentTarget;
        setError("");
        setName(newName);
    };

    const addUser = () => {
        const decimalsStartMatch = decimalsStartCheck(name)

        if (name.trim() && !decimalsStartMatch) {
            setError('');
            alert(`Hello ${name} !`);
            addUserCallback(name);
        } else {
            setError('Enter name please!')
            setName("");
        }

    };

    const totalUsers = users.length

    return (
        <div>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                totalUsers={totalUsers}
                error={error}
            />
        </div>
    );
}

export default GreetingContainer;
