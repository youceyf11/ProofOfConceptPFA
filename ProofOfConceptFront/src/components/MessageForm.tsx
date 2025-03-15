import React, { useState } from 'react';
import axios from 'axios';

const MessageForm: React.FC = () => {
    const [content, setContent] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/messages', {
                content,
            });
            console.log('Message created:', response.data);
            setContent(''); // Clear the input after submission
        } catch (error) {
            console.error('Error creating message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          required
      />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MessageForm;
