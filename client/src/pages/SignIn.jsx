import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(signInFailure(res.statusText));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  console.log(error);

  return (
    <div className="flex flex-col justify-center m-auto font-semibold md:max-w-xl px-10  md:px-0 mt-20">
      <h1 className="font-bold text-3xl mb-7 text-center text-slate-800">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          id="email"
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="text"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          id="password"
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="p-3 rounded-md bg-slate-800 text-white transition-all hover:bg-slate-950"
        >
          {loading ? "Loading..." : "SIGN IN"}
        </button>
        <button className="p-3 rounded-md bg-red-700 text-white transition-all hover:bg-red-600">
          CONTINUE WITH GOOGLE
        </button>
        <p>
          Don&apos;t have an account?{" "}
          <Link
            to="/sign-up"
            className="text-sky-600 transition-all hover:text-sky-400"
          >
            Sign up
          </Link>{" "}
        </p>
      </form>
      {error && (
        <p className="text-red-700">{error || "Something went wrong!"}</p>
      )}
    </div>
  );
}

export default SignIn;
