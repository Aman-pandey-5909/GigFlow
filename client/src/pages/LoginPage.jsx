import React from "react";
import api from "../api/api";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [errormsg, setErrormsg] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    email: "",
    password: ""
  });

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { ...userData });
      dispatch(setUser(res.data));
      navigate("/");
    } catch (error) {
      // console.log(error);
      setErrormsg(error.response.data.message || error.message);
    }
  };

  return (
    <main className="flex flex-col items-center my-5 gap-3 w-fit mx-auto border px-3 py-2 rounded-lg">
      <h1 className="text-3xl font-bold">Login</h1>
      <form action="" onSubmit={login} className="flex flex-col gap-3">
        <div className="grid-cols-2 grid place-items-center gap-3">
          <label htmlFor="email" className="text-xl font-semibold">
            Email:{" "}
          </label>
          <input
            required
            placeholder="abc@example.you"
            className="px-3 py-1 border rounded-xl"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="grid-cols-2 grid place-items-center gap-3">
          <label htmlFor="password" className="text-xl font-semibold">
            Password:{" "}
          </label>
          <input
            required
            placeholder="password"
            className="px-3 py-1 border rounded-xl"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-green-300 px-3 py-1 rounded-md">
          Login
        </button>
        <p className="text-red-400">{errormsg}</p>
        <p>
          Not registered? <button onClick={() => navigate("/signup")}>Signup</button>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
