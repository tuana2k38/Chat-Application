import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="2121094e-f634-4032-b4cb-60360b80a8e5"
            userName="admin"
            userSecret="Baoan@95"
            renderChatFeed={(chatAppPros) => <ChatFeed{...chatAppPros} />}
        />
    );
}

export default App;