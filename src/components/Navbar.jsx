import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="navbar bg-base-100 justify-between fixed z-50 shadow-2xl">
        <a className="btn btn-ghost text-xl">Chat With Anyone</a>
        {currentUser ? (
          <button
            className="text-sm bg-base-300 px-3 py-2 rounded-2xl border hover:bg-base-50"
            onClick={handleLogOut}
          >
            SignOut
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
