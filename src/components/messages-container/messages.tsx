import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { fromPromise } from "rxjs/internal-compatibility";
import { map } from "rxjs/operators";

import './messages.css'

export interface IMessage {
    id: number;
    name: string;
    email: string;
    body: string;
}

const Messages: FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const getMessages = fromPromise(axios.get('https://jsonplaceholder.typicode.com/comments')).pipe(
            map(resp => resp.data as IMessage[])
        );

        getMessages.subscribe((messages) => {
            messages = messages.splice(0, 20);
            setMessages(messages)
        });
    }, [])

    return (
        <div className="messages-list">
            {messages.map((message) => {
                const id = message.id;
                return (
                    <div className="message-item" key={id}>
                        <div className='icon'>
                            {message.email.charAt(0)}
                        </div>
                        <div className='data'>
                            <div className='email'>
                                {message.email}
                            </div>
                            <div>
                                {message.body}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Messages;
