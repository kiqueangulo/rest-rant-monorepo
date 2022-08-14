import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      const response = await fetch(
        "http://localhost:5000/authentication/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const user = await response.json();

      setCurrentUser(user);
    };

    getLoggedInUser();
  }, []);

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;
