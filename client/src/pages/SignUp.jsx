import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex flex-col justify-center m-auto font-semibold md:max-w-xl px-10  md:px-0 mt-20">
      <h1 className="font-bold text-3xl mb-7 text-center text-slate-800">
        Sign Up
      </h1>
      <form action="" className="flex flex-col gap-3">
        <input
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="text"
          placeholder="username"
        />
        <input
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="text"
          placeholder="email"
        />
        <input
          className="bg-gray-200 p-3 rounded-md outline-none"
          type="password"
          placeholder="password"
        />

        <button className="p-3 rounded-md bg-slate-800 text-white transition-all hover:bg-slate-950">
          SIGN UP
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
    </div>
  );
}

export default SignUp;