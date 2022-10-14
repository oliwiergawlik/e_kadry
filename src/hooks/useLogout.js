import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    return async () => {
        setAuth({});

        try {
            await axios("/logout", {
                withCredentials: true,
            });
        } catch (error) {
            console.error(error);
        }
    };
};

export default useLogout;
