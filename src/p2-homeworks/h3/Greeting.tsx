import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    keyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback,keyPressCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass


    return (
        <div>
            <input value={name}
                   onKeyPress={keyPressCallback}
                   onChange={setNameCallback} className={inputClass}/>
            <button disabled={error ? true : false} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div className={s.errorText}>{error}</div>}
        </div>
    )
}

export default Greeting
