import React from "react";
import s from "./Greeting.module.css";

export type GreetingPropsType = {
    name: string
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = s.error === "" ? `${s.validInput} ${s.input}` : `${s.error} ${s.input}`;

    return (


        <div className={s.container}>
            <h3>Enter please user' name</h3>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.error}>{error}</span>
            <span className={s.span}>{totalUsers}</span>
        </div>

    );
}

export default Greeting;
