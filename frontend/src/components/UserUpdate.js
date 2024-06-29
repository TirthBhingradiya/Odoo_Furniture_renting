import { React, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
function UserUpdate() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .post("http://localhost:4000/userData", {
        token: window.localStorage.getItem("token"),
      })
      .then((res) => {
        const data = res.data;
        setUser(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  }, []);
  const handleSubmit = () => {};
  return (
    <div className="ufrom">
      {user ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input id="fname" name="fname" value={user.fname} />
          <br />
          <label htmlFor="lname">Last Name</label>
          <input id="lname" name="lname" value={user.lname} />
          <br />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" value={user.email} />
          <br />
          <label htmlFor="mobile">Mobile</label>
          <input id="mobile" name="mobile" value={user.mobile} />
          <br />
          <input type="submit" value="Update" />
        </form>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default UserUpdate;
