export const styles = `
  .widget__container * {
    box-sizing: border-box;
    z-index: 999;
  }

  .message {
    max-width: 70%;
    margin-bottom: 8px;
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
    max-height: 600px;
    overflow-y: auto;
    auto-overflow: scroll;
    scroll-behavior: auto;
    padding: 10px;
    padding-top: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    left-border: 8px;
  }

  .chat-box {
    display: flex;
    flex-direction: column;
  }

  .chat-message {
    max-width: 80%;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: 20px;
    font-size: 16px;
    word-wrap: break-word;
    background-color: #f0f0f0;
  }

  .message-user {
    align-self: flex-end;
    background: linear-gradient(135deg, #FFA500, #FF0000);
    color: #fff;
    border-bottom-right-radius: 2px;
  }

  .message-bot {
    align-self: flex-start;
    background-color: #f0f0f0;
    color: #333;
    border-bottom-left-radius: 2px;
  }

  .input-container {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 5px;
    padding-top: 5px;
    border: 1px solid #ccc;
    border-radius: 1px;
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
    position: sticky;
    bottom: -16px;
    right: 0;
    z-index: 999;
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
    padding: 8px 10px;
    margin-left: 10px;
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
    transform: scale(1);
    transform-origin: right bottom;
    -webkit-transition: width 200ms ease,height 300ms ease,max-height 300ms ease,-webkit-transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),opacity 83ms ease-out;
    transition: width 200ms ease,height 300ms ease,max-height 300ms ease,transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),opacity 83ms ease-out;
  }

  .widget__icon {
    cursor: pointer;
    width: 60%;
    position: absolute;
    top: 18px;
    left: 16px;
    transition: width 200ms ease, height 300ms ease, max-height 300ms ease, transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 83ms ease-out;
  }

  .widget__hidden {
    transform: scale(0);
  }
  .widget__open {
    height: 704px;
    max-height: 700px;
    opacity: 1;
    transform: scale(1);
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
    padding: 1px;
    align-self: flex-end;
    background: linear-gradient(135deg, #FFA500, #FF0000);
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
.button-45 {
  align-items: center;
  background-color: #FFE7E7;
  background-position: 0 0;
  border: 1px solid #FEE0E0;
  border-radius: 20px;
  box-sizing: border-box;
  color: #D33A2C;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  padding: 4px 12px;
  text-align: left;
  text-decoration: none;
  text-shadow: none;
  text-underline-offset: 1px;
  transition: border .2s ease-in-out,box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;
}

.button-45:active,
.button-45:hover,
.button-45:focus {
  outline: 0;
}


.button-45:active {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}

.button-45:hover {
  background-color: #FFE3E3;
  border-color: #FAA4A4;
}

.button-45:active:hover,
.button-45:focus:hover,
.button-45:focus {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}
.inputGroup {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 100%;
  position: relative;
  display: flex;
}

.inputGroup input {
  font-size: 100%;
  flex-grow: 1;
  margin-right: 10px;
  padding: 0.8em;
  padding-right: 8.3em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.inputGroup label {
  font-size: 100%;
  border-radius: 20px;
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup :is(input:focus, input:valid)~label {
  transform: translate(0%) scale(0);
  margin: 0em;
  padding: 0.4em;
  background-color: #e8e8e8;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(150, 150, 200);
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
