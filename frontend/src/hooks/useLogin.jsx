import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password, role = 'guest') => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role}),
    });

    try {
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        return false;
      }
      if (response.ok) {
        const { user, token } = json;
        //save the user to local storage
        localStorage.setItem("user", JSON.stringify({ ...user, token, role }));

        //update the auth context
        dispatch({ type: "LOGIN", payload: { 
            ...user, 
            token,
            isHost: user.role === 'host' // Set isHost based on role
          } });

        setIsLoading(false);
        return true;
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
      return false;
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
