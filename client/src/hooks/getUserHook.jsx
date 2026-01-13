import api from "../api/api";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const GetUser = ({children}) => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await api.get("/me");
            dispatch(setUser(res.data.user));
          } catch (error) {
            console.log(error);
          }
        };

        if (user) return
        getUser();
      }, [dispatch]);
    return (
        <>
            {children}
        </>
    )
};

export default GetUser