// AppContext.js
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  useEffect(() => {
    fetch("https://tenant-landlord-ca243-default-rtdb.firebaseio.com/issues.json")
      .then(res => res.json())
      .then(data => setIssues(Object.values(data || {})));

    fetch("https://tenant-landlord-ca243-default-rtdb.firebaseio.com/users.json")
      .then(res => res.json())
      .then(data => setUsers(Object.values(data || {})));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AppContext.Provider value={{ issues, setIssues, users, setUsers, currentUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
