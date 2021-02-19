import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': "1e31aa2f-d7a1-4599-b274-6e59977effdc", 'User-Name': username, 'User-Secret': password }

        try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObject });

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

           window.location.reload();
            
        } catch (error) {
            setError('Wrong Credentials.')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Charla</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required  />   
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required  />           
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>  
                    <div align="center">
                        <h2 className="error">{error}</h2>   
                    </div>

                </form>
            </div>
        </div>

    );

}

export default LoginForm;