import React from "react";
import { useState, useEffect } from "react";

function LastUserInDb() {
  let [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        setUser(users[users.length - 1]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <div >
          <h5 >
            Último usuario grabado
          </h5>
        </div>
        <div >
          <div >
            <img src="" alt=""/>
          </div>
          <div >
            <p>{user.name}</p>
          </div>
          <div >
            <p>{user.rol}</p>
          </div>
     
      </div>
    </div>
  );
}

export default LastUserInDb;
