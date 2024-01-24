import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signOut } from "../redux/user/userSlice";

function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const signoutHandler = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentUser ? (
        <div className="flex flex-col justify-center m-auto font-semibold md:max-w-xl px-10  md:px-0 mt-20">
          <div className="mb-7 m-auto">
            <h1 className="font-bold text-3xl mb-5 text-slate-800">Profile</h1>
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={currentUser.profilePicture}
              alt="Profile"
            />
          </div>
          <form action="" className="flex flex-col gap-3">
            <input
              id="username"
              defaultValue={currentUser.username}
              className="bg-gray-200 p-3 rounded-md outline-none"
              type="text"
              placeholder="username"
            />
            <input
              id="email"
              className="bg-gray-200 p-3 rounded-md outline-none"
              type="text"
              placeholder="email"
              defaultValue={currentUser.email}
            />
            <input
              id="password"
              className="bg-gray-200 p-3 rounded-md outline-none"
              type="password"
              placeholder="password"
            />

            <button
              type="submit"
              className="p-3 rounded-md bg-slate-800 text-white transition-all hover:bg-slate-950"
            >
              {/* {loading ? "Loading..." : "UPDATE"} */}
              UPDATE
            </button>
            <p className="text-red-500 flex items-center justify-between">
              <span>Delete Account</span>
              <span className="cursor-pointer" onClick={signoutHandler}>
                Sign Out
              </span>
            </p>
          </form>
          {/* {error && <p className="text-red-700">Something went wrong!</p>} */}
        </div>
      ) : (
        <Navigate to="/sign-in" />
      )}
    </>
  );
}

export default Profile;
