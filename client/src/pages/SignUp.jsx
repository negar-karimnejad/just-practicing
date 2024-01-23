import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      if (data.success === false) {
        dispatch(signInFailure());
      }
      navigate("/sign-in");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="flex flex-col justify-center m-auto font-semibold md:max-w-xl px-10  md:px-0 mt-20">
      <h1 className="font-bold text-3xl mb-7 text-center text-slate-800">
        Sign Up
      </h1>
      <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          id="username"
          onChange={handleChange}
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="text"
          placeholder="username"
        />
        <input
          id="email"
          onChange={handleChange}
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="text"
          placeholder="email"
        />
        <input
          id="password"
          onChange={handleChange}
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="password"
          placeholder="password"
        />

        <button
          disabled={loading}
          type="submit"
          className="p-3 rounded-md bg-slate-800 text-white transition-all hover:bg-slate-950"
        >
          {loading ? "Loading..." : "SIGN UP"}
        </button>
        <button className="p-3 rounded-md bg-red-700 text-white transition-all hover:bg-red-600">
          CONTINUE WITH GOOGLE
        </button>
        <p>
          Have an account?{" "}
          <Link
            to="/sign-in"
            className="text-sky-600 transition-all hover:text-sky-400"
          >
            Sign in
          </Link>{" "}
        </p>
      </form>
      {error && <p className="text-red-700">Something went wrong!</p>}
    </div>
  );
}

export default SignUp;
