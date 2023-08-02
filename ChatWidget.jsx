import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ChatInterface from './ChatInterface';

const FloatingChatWidget = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [chatData, setChatData] = useState([]);

  const toggleChatVisibility = () => {
    setChatVisible((prevState) => !prevState);
  };

  const handleSendMessage = (message) => {

    // Ejemplo de cómo actualizar el chatData
    const newMessage = {
      key: Date.now(),
      sender: 'user',
      message: message,
    };
    setChatData((prevData) => [...prevData, newMessage]);
  };

  return (
    <div>
      {/* Botón flotante para abrir/cerrar el chat */}
      <button onClick={toggleChatVisibility} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        {isChatVisible ? '-' : '+'}
      </button>

      {/* Renderizado del componente ChatInterface */}
      {isChatVisible && (
        <div style={{ position: 'fixed', bottom: '85px', right: '40px' }}>
          <ChatInterface chatData={chatData} onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
};

// Renderizar el widget en el elemento con ID "chat-widget-container"
ReactDOM.createRoot(<FloatingChatWidget />, document.getElementById('app'));