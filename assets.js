export const styles = `
  .widget__container * {
    box-sizing: border-box;
  }

  .message {
    max-width: 70%;
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;
    border-top-right-radius: 0%;
    font-size: 16px;
    word-wrap: break-word;
    background-color: #007bff;
    color: #f0f0f0;
    align-self: flex-end;
    line-height: 1.2;
    max-height: 100px;
    overflow-y: auto;
  }

  .chat-container {
    height: 500px;
    max-height: 800px;
    overflow-y: auto;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .chat-box {
    display: flex;
    flex-direction: column;
  }

  .chat-message {
    max-width: 80%;
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
    word-wrap: break-word;
    background-color: #f0f0f0;
  }

  .message-user {
    align-self: flex-end;
    background-color: #007bff;
    color: #f0f0f0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .message-bot {
    align-self: flex-start;
    background-color: #f0f0f0;
    color: #333;
    border-top-left-radius: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .input-container {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 1px;
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
    position: sticky;
    bottom: -16px;
    right: 0;
    z-index: 1;
  }

  .input-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    padding: 8px 10px;
  }

  #messageInput {
    flex: 1;
    height: 30px;
    border: none;
    font-size: 16px;
    background-color: transparent;
  }

  #messageInput::placeholder {
    color: #aaa;
  }

  input:focus {
    outline: none;
  }

  .form__field {
    margin-bottom: 0;
  }

  .form__field button {
    margin-left: 10px;
    padding: 0;
    border: none;
    border-radius: 50%;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
  }

  .form_filed_button {
    border: 1px solid #d9d9d9;
    height: 30px;
    color: #fff;
    background-color: #f54e42;
    border-radius: 20px;
    
  }

  .widget__container {
    box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
    width: 400px;
    overflow: auto;
    right: 40px;
    bottom: 85px;
    position: absolute;
    transition: max-height 0.2s ease;
    font-family: 'Segoe UI', Roboto;
    background-color: #e6e6e6a6;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .widget__icon {
    cursor: pointer;
    width: 60%;
    position: absolute;
    top: 18px;
    left: 16px;
    transition: transform 0.3s ease;
  }

  .widget__hidden {
    transform: scale(0);
  }

  .button__container {
    border: none;
    background-color: #f54e42;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
  }

  .widget__container.hidden {
    max-height: 0px;
  }

  .widget__header {
    padding: 1rem 2rem 1.5rem;
    background-color: #f54e42;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
  }

  .widget__header h3 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;


export const MESSAGE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;
