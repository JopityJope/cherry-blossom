import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useState } from "react";
import { accounts } from "./utils/Utils";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [drone, setDrone] = useState(null);

  const handleLogIn = (username, password) => {
    const currentAccount = accounts.find((acc) => acc.name === username);

    if (currentAccount?.password === password) {
      console.log("Succesful login!");
      const color = currentAccount.color;
      const drone = new window.Scaledrone("tuF82fYBhIeApAZE", {
        data: { username, color },
      });

      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }

        setDrone(drone);
        setUser({
          id: drone.clientId,
          username,
          color,
        });
        setIsLoggedIn(true);
      });
    } else console.log("Username or password is incorrect!");
  };

  return (
    <>
      {isLoggedIn ? (
        <Chat drone={drone} user={user} />
      ) : (
        <Login onUserSubmit={handleLogIn} />
      )}

      <div className="svg" />
    </>
  );
}

export default App;
