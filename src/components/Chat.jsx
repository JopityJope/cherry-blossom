import React, { useState, useEffect } from "react";
import Messages from "./Messages";
import Title from "./Title";
import Input from "./Input";

import Stars from "./Stars";
import Cvijet from "./CvijetChat";
import Pahulje from "./Pahulje";

function Chat({ drone, user }) {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    const room = drone.subscribe("observable-room");
    room.on("data", (data, user) => {
      setMsgList([...msgList, { user, text: data.text }]);
    });
  }, [msgList, drone]);

  const handleSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message: {
        text: message,
      },
    });
  };

  return (
    <>
      <Cvijet />
      <Pahulje />
      <Stars />
      <div className="chat-box">
        <Title />
        <Messages messages={msgList} currentUser={user} />
        <Input handleSendMessage={handleSendMessage} />
      </div>
    </>
  );
}

export default Chat;
