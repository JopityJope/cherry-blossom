import React from "react";

function Messages({ messages, currentUser }) {
  const displayMessages = function (message, i) {
    const { user, text } = message;
    const isMe = (user || {}).id === (currentUser || {}).id;

    if (isMe) {
      return (
        <div
          key={i}
          className="poruka user user--current margin-big--top margin-big--right"
        >
          <div className="oblak">
            <p className="user-name--current">{user.clientData.username}</p>
            <p className="oblak-tekst">{text}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="poruka user user--x margin-big--top">
          <div
            style={{ backgroundColor: user.clientData.color }}
            className="user-icon"
          ></div>
          <div className="oblak">
            <p className="user-name">{user.clientData.username}</p>
            <p className="oblak-tekst">{text}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="messages-box">
      {messages.map((message, i) => displayMessages(message, i))}
    </div>
  );
}

export default Messages;
