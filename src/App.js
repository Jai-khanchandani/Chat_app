import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'

import './App.css';

const App = () => {
    return(
        <ChatEngine 
            heigh="100vh"
            projectID="1e31aa2f-d7a1-4599-b274-6e59977effdc"
            userName="Hamgoe"
            userSecret="1212"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        
        />
    )
}

export default App;