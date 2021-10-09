import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const currentInputValue = e.currentTarget.value

        if(currentInputValue.trim().length === 0) setError("Enter correct value")
        if(currentInputValue.trim().length !== 0) setError("")

        setName(currentInputValue.trim()) // need to fix
    }

    const keyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode == 32) {
            if(name.length < 1) return

            addUserCallback(name)
        }
    }

    const addUser = () => {
        if(name.length < 1) return

        addUserCallback(name)
    }

    const totalUsers = users.length

    useEffect(()=>{
        if(users.length){
            alert(users)
        }

    },[users])

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            keyPressCallback={keyPressCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
