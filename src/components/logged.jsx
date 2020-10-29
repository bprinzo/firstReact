import React, { useState } from "react";
import { Link } from "react-router-dom";
export default () => {
  const [logOut, setlogOut] = useState(false);

  const handleClick = () => (
    setlogOut(!logOut),
    logOut
      ? false
      : (window.sessionStorage.removeItem("token"), window.location.reload())
  );

  return (
    <div className="logOut">
      <h1>You're Logged</h1>
      <Link to="/body">
        <button>Anime Search</button>
      </Link>
      <Link to="/upload">
        <button>Create Posts</button>
      </Link>
      <Link to="/posts">
        <button>Posts</button>
      </Link>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
