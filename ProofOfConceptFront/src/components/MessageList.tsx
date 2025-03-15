import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Message } from '../types';

const MessagesList: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/messages');
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Messages:</h2>
            <div>
                {messages.map((message) => (
                    <p key={message.id}>{message.content}</p>
                ))}
            </div>
        </div>
    );
};

export default MessagesList;
