import React, {FC} from 'react'
import sl from "./Message.module.css"

interface MessageTypes {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: FC<MessageTypes> = ({message,time,name,avatar}) => {

    return (
        <div className={sl.container}>
            <div className={sl.avatar}>
                <img src={avatar} alt={`${name} icon`}/>
            </div>
            <div className={sl.holder}>
                <div className={sl.box}>
                    <strong className={sl.name}>{name}</strong>
                </div>
                <div className={sl.box}>
                    <span className={sl.message}>{message}</span>
                    <span className={sl.time}>{time}</span>
                </div>
            </div>
        </div>
    )
}