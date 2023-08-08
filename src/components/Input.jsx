import React, { useState } from "react";

function Input({ handleSendMessage }) {
  const [text, setText] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    if (text.trim() !== "") {
      handleSendMessage(text);
      setText("");
    }
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        name="message-input"
        id="message-input"
        className="message-input"
        placeholder="Message"
        autoComplete="off"
        spellCheck="false"
        autoFocus={true}
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>

      <button type="submit" className="send-btn">
        <svg
          className="send-btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
        </svg>
      </button>
    </form>
  );
}

export default Input;
