import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async () => {
    //remove user from local storage

    localStorage.removeItem("user");

    //dispatch logout action

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
