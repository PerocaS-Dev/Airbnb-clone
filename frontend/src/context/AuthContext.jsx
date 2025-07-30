import React, { createContext, useReducer, useContext, useEffect } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // Add proper null checks
      if (!action.payload || !action.payload.user) {
        return state;
      }
      return {
        isLoggedIn: true,
        user: {
          _id: action.payload.user?._id, // Safe access
          email: action.payload.user?.email,
          token: action.payload.token,
          isHost: action.payload.user?.role === "host",
        },
      };
    case "LOGOUT":
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user && user.token) {
          dispatch({
            type: "LOGIN",
            payload: {
              user: {
                ...user,
                isHost: user.role === "host", // Derive from stored role
              },
              token: user.token,
            },
          });
        }
      } catch (err) {
        console.error("Failed to parse stored user:", err);
        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
