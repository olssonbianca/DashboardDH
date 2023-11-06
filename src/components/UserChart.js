import React from "react";
import { useState, useEffect } from "react";


function UserChart() {
    let [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        setUser(users);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    /* <!-- DataTales Example --> */
    <div>
              {user.map((i) => {
                return <UserList key={i} />;
              })}
    </div>
  );
}

export default UserChart;